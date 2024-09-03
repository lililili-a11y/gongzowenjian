document.getElementById('videoSelect').addEventListener('change', function() {  
    var video = document.getElementById('myVideo');  
    var selectedValue = this.value;  
      
    // 在这个简单的例子中，我们可能不需要更改视频源，  
    // 因为只有一个视频源。但这里保留代码以备将来使用。  
    // 如果需要，可以取消注释以下行来更新视频源。  
    video.src = selectedValue;  
    video.load(); // 重新加载视频  
});  
  
// 注意：由于只有一个视频源，并且它被硬编码在HTML中，  
// 因此上面的JavaScript代码实际上在这个特定例子中是不必要的。