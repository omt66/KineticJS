suite('AnnularSection', function() {
    // ======================================================
    test('add arc', function() {
        var stage = addStage();
        var layer = new Kinetic.Layer();
        var arc = new Kinetic.Arc({
            x: 100,
            y: 100,
            innerRadius: 50,
            outerRadius: 80,
            angle: Math.PI * 0.4,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4,
            name: 'myArc',
            draggable: true
        });

        layer.add(arc);
        stage.add(layer);

        assert.equal(arc.getClassName(), 'Arc');

        var trace = layer.getContext().getTrace();
        //console.log(trace);
        assert.equal(trace, 'clearRect(0,0,578,200);save();transform(1,0,0,1,100,100);beginPath();arc(0,0,80,0,1.257,false);arc(0,0,50,1.257,0,true);closePath();fillStyle=green;fill();lineWidth=4;strokeStyle=black;stroke();restore();');
    });

    // ======================================================
    test('set annular section angle using degrees', function() {
        var stage = addStage();
        var layer = new Kinetic.Layer();
        var arc = new Kinetic.Arc({
            x: 100,
            y: 100,
            innerRadius: 50,
            outerRadius: 80,
            angleDeg: 90,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4,
            name: 'myArc',
            draggable: true,
            lineJoin: 'round'
        });

        layer.add(arc);
        stage.add(layer);

        assert.equal(arc.getAngle(), Math.PI / 2);
    });
});