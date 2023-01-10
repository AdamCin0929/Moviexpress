// 取得導覽列元素
const nav = document.querySelector('#mainnav');
// 取得導覽列元素頂端位置
const topOfNav = nav.offsetTop;

function fixNav() {
  // 如果觀景窗頂部位置值大於導覽列頂部就沾黏，反之取消沾黏
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}
// 監聽滾動事件
window.addEventListener('scroll', fixNav);

$().ready(function () {    //準備開始函式
  $('#name').val($('#name').attr("defaultValue"));       //給昵稱框添加默認值
  $('#neirong').val($('#neirong').attr("defaultValue")); //給內容框添加默認值

  $('#name').focus(function () {                            //昵稱框得到焦點事件
    if ($('#name').val() == $('#name').attr('defaultValue')) {    //如果昵稱框的值等于默認值 
      $('#name').val("");                                  //昵稱框的值 附空值
    }
  })

  $('#neirong').focus(function () {                             //內容框得到焦點事件
    if ($('#neirong').val() == $('#neirong').attr('defaultValue')) { //如果內容框的值等于默認值 
      $('#neirong').val("");                                  //內容框的值 附空值
    }
  })
  //---------------------------------------------------------
  //失去焦點
  $('#name').blur(function () {                  //昵稱框失去焦點事件
    if ($('#name').val() == "") {               //如果值等于空
      $('#name').val($(this).attr('defaultValue'));       //昵稱框的值 附默認值
    }
  })

  $('#neirong').blur(function () {              //內容框失去焦點事件
    if ($('#neirong').val() == "") {            //如果值等于空
      $('#neirong').val($(this).attr('defaultValue'));     //內容框的值 附默認值
    }
  })
  //------------------------------------------------上傳留言
  var num = 0;     //這個變數 是給第幾條留言的中的 “幾” 全域變數
  $('#btn').click(function () {         //獲取點擊按鈕
    num++;                          //每點擊一下意味著上傳了一條留言  所以num++
    var s = new Date();               //這個是實作 時分秒的一個實體化 
    var h = s.getHours();             //獲取當前時間小時
    var m = s.getMinutes();           //獲取當前時間分鐘
    var mm = s.getSeconds();          //獲取當前時間秒
    var ni = $('#name').val();        //獲取昵稱框的值
    var nei = $('#neirong').val();    //獲取內容框的值
    //這個xin 是拼接  具體怎么拼接的看下面的樣式代碼 （就是HTML元素那些）
    var xin = $("<p> <i>" + ni + ":&nbsp;</i><b>&nbsp;" + nei + "</b><span class='yc' id='x'><a class='delete'>刪除此留言</a>&nbsp&nbsp&nbsp&nbsp&nbsp;</strong></span><span class='times'>" + h + ":" + m + ":" + mm + "</span></p>");
    $('#liuyan').append(xin);       //把新拼接的內容追加到大的留言框里面就是那個height 300px  的里面  實作上傳留言的操作
    $('em').css('display', 'none');  //已經有內容了，就把提示訊息的css樣式 display 設定為none
  })


  //--------------------------------------------------   把后面添加的元素 設定樣式   
  $(document).on('mouseover', 'p', function () {            //因為上傳的留言是后面添加上去的 它沒有默認事件 屬性 所以要使用on 這條代碼意思是為p標簽添加一個移入事件
/* 為上傳的留言添加背景顏色*/   			                   /*把這個事件的class屬性 
                                                          取名叫做yellow 這個yellow 已經在style里面已經設定了 
                                                           只要這個事件激發就會創建一個類 從而style的css樣式起作用*/
/*這個是留言資訊   洗掉字符和時間的顯示 */  $(this).find('#x').removeAttr('class', 'yc');  //   #x 其實是上面字串拼接的一個<span>標簽的id 留言的時間資訊 及洗掉都是這個代碼顯示  			
  })                                                                          //為什么要 removeAttr 呢？  因為上面style已經設定了包含資訊的欄位不顯示了   所以這里想讓他顯示就要移除   

  //-------------------------------------- 				把后面添加的元素 設定樣式
  $(document).on('mouseout', 'p', function () {           //因為上傳的留言是后面添加上去的 它沒有默認事件 屬性 所以要使用on 這條代碼意思是為p標簽添加一個移出事件
    $(this).removeAttr('class', 'yellow');           //當滑鼠移除 就移除留言的背景顏色    

    $(this).find('#x').attr('class', 'yc');         //因為移入的代碼已經給 移除掉上面的style樣式了 ，所以這里要重新設定一下
  })

  //----------------------------------------------------------------- 點擊洗掉就洗掉
  $(document).on('click', '.delete', function () {    //a標簽是后面添加的 所以使用on 這個代碼是把a添加yg click事件

    var a = confirm('確定要刪除嗎?')           //彈窗詢問是否洗掉
    if (a) {                              //如果點擊 是
      num--;                         // 還記得這個num嗎 在上面是全域變數
      $(this).parents().parents('p').remove();   //a 便簽的第一個parents是span但是span被p包裹所以還有一個parents 找到了p段落 給移除
      var allstrong = $('#liuyan').find('strong');  //找到留言板中所有的 strong 存盤
      for (var i = 0; i < allstrong.length; i++) {      //i<找到的strong
        $(allstrong[i]).text("第" + (i + 1) + "條");       //第i條 strong便簽的內容 賦值為i+1條 為什么i+1呢？ 因為i是0開始
      }
      if (num == 0) {   //如果當num-- 變成0了 就相當于沒有留言了 ，那么留言板的提示訊息 顯示出來
        $('em').css('display', 'block')          //設定em的display 為顯示 也就是block
      }
    }

  })

})