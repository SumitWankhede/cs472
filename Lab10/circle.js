$(document).ready(function(){
    var closure= (function(){
        let i=50;
        console.log(i);
        const  size= function() {
            console.log(i);
            return i+=parseInt($("#growth").val());
        }
        return {
            size:size
        }
    })();

    function grow ()
    {
        let size =closure.size();
        $(".bubble").each(function(idx, e){
        $(e).css(
            {
            "width":size+"px",
            "height":size+"px",
            "border-radius":size+"px"
        })
    })
    }
    $("#start").click(function(){
        let number =parseInt($("#number").val());
        for(let i =0;i<number;i++)
        {
            $("#circle").append($("<div>", {
                "class":"bubble",
               "css": {
                 "width":parseInt($("#width").val()),
                 "height":parseInt($("#width").val()),
                 "border-radius": parseInt($("#width").val()),
                 "margin-top":"25%",
                 "margin":"auto",
                 "display":"flex",
                 "background-color":"RGB("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")"
            },
            "click":function(){
                $(this).hide();
            }
            }))
        }
        //grow();
        setInterval(grow,250);
    }); 
});
