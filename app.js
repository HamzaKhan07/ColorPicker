function ready()
{
    var colors="ABCDEF0123456789";
    var rows=document.querySelectorAll(".row");
    var index;
    var j=0,k=0;
    var code='#';

    document.querySelector(".pick").addEventListener("click",clicked);

    function clicked()
    {
        j=0;
        for(k=1; k<=5; k++)
        {
            change();
        }
    }

    function change()
    {
        for(var i=1; i<=4; i++)
        {
            index=getIndex(0,15);
            code=code+colors[index];
        }
        rows[j].querySelector(".name").innerText=code;
        rows[j].style.background=code;
        j++;
        code='#';
    }
    function getIndex(min,max)
    {
        var num=Math.floor(Math.random()*(max-min+1)+min);
        return num;
    }

}
ready();