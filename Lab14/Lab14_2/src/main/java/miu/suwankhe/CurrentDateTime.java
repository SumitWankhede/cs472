package miu.suwankhe;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.Locale;

public class CurrentDateTime extends SimpleTagSupport {
    String color;
    String size;

    @Override
    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        SimpleDateFormat sdfOut = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz", Locale.US);
        String text = "Current Date: " + sdfOut.format(new Date());
        if (color != null) {
            out.write("<span style='color: " + color + "; size: " + size + "'>" + text + "</span>");
        } else {
            out.write(String.format("<span>%s</span>", text));
        }
    }
    public void setColor(String color) {
        this.color = color;
    }
    public void setSize(String size) {
        this.size = size;
    }
}
