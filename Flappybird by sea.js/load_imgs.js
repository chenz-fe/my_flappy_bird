define( function(require, exports,module) {
    var game=require('main');
    // 加载图片
var imgs = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];
// 用于存放图像的标签<img />
var imgObjects = [];

// 在用到的时候,这样拿图像:
// imgObjects[0]

var loadCount = 0;
// 图片加载完成后的监听器
function listener() {
    loadCount++;
    if (loadCount >= imgs.length) {
       console.log('全部加载完成,已加载：', loadCount);
        game.run(imgObjects);
    }
}

imgs.forEach(function (imgurl) {
    // 通过遍历，创建了五个IMG标签
    var img = new Image(); // 这个是img标签。
    img.addEventListener('load', listener);
    img.src = './imgs/' + imgurl;
    imgObjects.push(img);
});
});
