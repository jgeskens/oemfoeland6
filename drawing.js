var canvas = document.getElementById("main_canvas");
var body = document.getElementById("body");
disableSelection(body, "default");

var c = canvas.getContext("2d");
var getCursorPosition = makeGetCursorPositionFunction(canvas);
var downX = -1, downY = -1;
var down = false;
var currentTool = pencilTool;
var buffer = null;

function changeTool(newTool)
{
    currentTool = newTool;
}

function mousedrag(x, y)
{
    currentTool.drag(canvas, c, downX, downY, x, y, $('#chkFill').is(':checked'));
    downX = x;
    downY = y;
}

function mousedragbegin(x, y)
{
    currentTool.begin(canvas, c, x, y);
}

function mousedragend(x, y)
{
    currentTool.end(canvas, c, x, y);
}

$(function()
{
    var hCanvas = $('#main_canvas');
    var btnSave = $('#btnSave');
    var btnLoad = $('#btnLoad');
    var btnDownload = $('#btnDownload');
    var btnErase = $('#btnErase');
    var fldName = $('#fldName');
    var toolColor = $('.tool_color');
    var toolLineWidth = $('.tool_line_width');
    var toolType = $('.tool_type');
    var body = $('body');
    
    hCanvas.mousemove(function(e)
    {
        var pos = getCursorPosition(e);
        var x = pos % 100000;
        var y = ~~(pos / 100000);
        if (down)
            mousedrag(x + 0.5, y + 0.5);
    });
    
    hCanvas.mousedown(function(e)
    {
        var pos = getCursorPosition(e);
        var x = pos % 100000;
        var y = ~~(pos / 100000);
        downX = x;
        downY = y;
        down = true;
        c.beginPath();
        mousedragbegin(x + 0.5, y + 0.5);
        mousedrag(x + 0.5, y + 0.5);
    });
    
    hCanvas.mouseup(function(e)
    {
        var pos = getCursorPosition(e);
        var x = pos % 100000;
        var y = ~~(pos / 100000);
        mousedragend(x + 0.5, y + 0.5);
    });
    
    body.mouseup(function(e)
    {
        down = false;
        downX = -1;
        downY = -1;
        return false;
    });
    
    btnLoad.click(function()
    {
        c.clearRect(0, 0, canvas.width, canvas.height);
        var data = localStorage.getItem(fldName.val());
        var img = new Image();
        img.src = data;
        img.onload = function()
        {
            c.drawImage(img, 0, 0);
        }
    });
    
    btnSave.click(function()
    {
        localStorage[fldName.val()] = canvas.toDataURL('image/png;base64');
    });
    
    btnDownload.click(function()
    {
        window.open(canvas.toDataURL('image/png;base64'));
    });
    
    toolColor.click(function()
    {
        var color = $(this).find('.tool_color_content').css('background');
        c.strokeStyle = color;
        c.fillStyle = color;
        toolColor.removeClass('selected');
        $(this).addClass('selected');
    });
    
    toolLineWidth.click(function()
    {
        c.lineWidth = parseInt($(this).find('.tool_line_width_content').css('height')) + 1;
        toolLineWidth.removeClass('selected');
        $(this).addClass('selected');
    });
    
    toolType.click(function()
    {
        var tool = $(this).find('.tool_type_content').attr('tool');
        changeTool(tools[tool]);
        toolType.removeClass('selected');
        $(this).addClass('selected');
    });
    
    btnErase.click(function()
    {
        c.clearRect(0, 0, canvas.width, canvas.height);
    });
});
