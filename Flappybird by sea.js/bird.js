define(function (require, exports, module) {
    // 鸟的精灵
    function Bird(img, cvs) {
        var _this = this;
        // 当鼠标点击按钮时，让小鸟向上飞
        cvs.addEventListener('click', function (event) {
            var x = event.layerX;
            var y = event.layerY;
            _this.fly();
        });
        // 图像来源
        this.img = img;
        // 位置
        this.x = 200;
        this.y = 100;
        // 当前帧
        this.index = 0;
        // 速度、加速度
        this.speed = 0;
        this.a = 0.0005;
        // 精灵在当前帧等待了多长时间
        this.waitTime = 0;
    }

    Bird.prototype.update = function (dt) {
        // 根据两帧间隔时间，更新精灵的数据
        // 更新当前帧的数据
        this.waitTime = this.waitTime + dt;
        if (this.waitTime > 100) {
            this.index = (this.index + 1) % 3;
            this.waitTime = this.waitTime - 100;
        }

        // 更新位置数据
        this.speed = this.speed + this.a * dt;
        this.y = this.y + this.speed * dt;
    };

    Bird.prototype.draw = function () {

        // 根据精灵的数据，把图片绘制到画布上

        ctx.save();

        // 先translate再rotate
        ctx.translate(this.x, this.y);

        // 速度为0.3时，角度为30度
        // 保证它永远不会转的超过45度。
        var speed = this.speed > 0.3 ? 0.3 : this.speed;

        var angle = speed / 0.3 * 45;

        ctx.rotate(angle / 180 * Math.PI);


        ctx.drawImage(this.img,
            52 * this.index, 0, 52, 45,
            // -26和-22.5用于：让鸟的图片的中心点和当前坐标系的中心点重合
            // 因为rotate是以坐标系的原点为中心点旋转的
            -26, -22.5, 52, 45
        );

        ctx.restore(); // 鸟绘制完后，恢复context的状态到绘制鸟之前的状态
    };


    // 在被点击时，改变速度，使小鸟向上飞
    Bird.prototype.fly = function () {

        this.speed = -0.3;
    };
    module.exports=Bird;
});