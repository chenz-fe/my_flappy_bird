define( function(require, exports,module) {
// 天空的构造函数
function Sky(img, x) {
    this.img = img;
    this.x = x;
    this.speed = -0.03;
}

Sky.prototype.update = function (dt) {
    // 如果天空飞出了屏幕范围，则“回收再利用”，让它右移到最右
    if (this.x < -800) {
        // 因为有可能此时this.x已经小于-800，而是-80x了
        // 所以要把这个误差算出来，再移到最右时加回来
        this.x =  this.x + 1600;
    }
    this.x = this.x + dt * this.speed;
};

Sky.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, 0);
};
module.exports=Sky;
});