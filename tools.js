var pencilTool = {
    drag: function(canvas, context, x1, y1, x2, y2, fill)
    {
        context.lineTo(x2, y2);
        context.stroke();
    },
    begin: function(canvas, context, x, y)
    {
    },
    end: function(canvas, context, x, y)
    {
    }
};

var rectTool = {
    buffer: null,
    beginX: null,
    beginY: null,
    drag: function(canvas, context, x1, y1, x2, y2, fill)
    {
        context.putImageData(this.buffer, 0, 0);
        if (fill)
            context.fillRect(this.beginX - 0.5, this.beginY - 0.5, x2 - this.beginX, y2 - this.beginY);
        else
            context.strokeRect(this.beginX, this.beginY, x2 - this.beginX, y2 - this.beginY);
    },
    begin: function(canvas, context, x, y)
    {
        this.buffer = context.getImageData(0, 0, canvas.width, canvas.height);
        this.beginX = x;
        this.beginY = y;
    },
    end: function(canvas, context, x, y)
    {
        this.buffer = null;
    }
};

var ovalTool = {
    buffer: null,
    beginX: null,
    beginY: null,
    drag: function(canvas, context, x1, y1, x2, y2, fill)
    {
        context.putImageData(this.buffer, 0, 0);
        var x1 = this.beginX;
        var y1 = this.beginY;
        var radius = Math.sqrt((x2 - x1) * (x2 - x1)
                               + (y2 - y1) * (y2 - y1));
        
        context.beginPath();
        context.arc((x1 + x2) / 2, (y1 + y2) / 2, radius / 2, 0, Math.PI * 2, false);
        context.closePath();
        
        if (fill)
            context.fill();
        else
            context.stroke();
    },
    begin: function(canvas, context, x, y)
    {
        this.buffer = context.getImageData(0, 0, canvas.width, canvas.height);
        this.beginX = x;
        this.beginY = y;
    },
    end: function(canvas, context, x, y)
    {
        this.buffer = null;
    }
}

var tools = {
    'pencil': pencilTool,
    'rect': rectTool,
    'oval': ovalTool,
};
