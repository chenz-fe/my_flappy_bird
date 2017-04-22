define(function (require, exports, module) {
    function Pipe(img1, img2, x) {
        this.img1 = img1;
        this.img2 = img2;
        // 保证了上管子的高度在50~200之间
        this.pipe1Y = Math.random() * 150 + 50;
        this.x = x;
        this.speed = -0.1;
    }

    Pipe.prototype.update = function (dt) {
        if (this.x < -52) {
            this.x = this.x + 200 * 5;
            // 回到屏幕右侧时，重置上管子的高度（给一个随机数）
            this.pipe1Y = Math.random() * 150 + 50; // 从50到200的一个随机数
        }
        this.x = this.x + this.speed * dt;
    };

    Pipe.prototype.draw = function () {
        // 其实应该是 -(420-this.pip1Y)
        ctx.drawImage(this.img2, this.x, this.pipe1Y - 420);
        ctx.drawImage(this.img1, this.x, this.pipe1Y + 150);

        // 绘制管子的路径，用于进行碰撞检测
        ctx.rect(this.x, this.pipe1Y - 420, 52, 420);
        ctx.rect(this.x, this.pipe1Y + 150, 52, 420);
    };
    module.exports=Pipe;
});
