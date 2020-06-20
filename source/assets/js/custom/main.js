console.log('js all');

$(function () {
  console.log('現在 jquery 版本：', $().jquery);

  /* datetimepicker
  -------------------------------------------------- */
  $(".js-form_datetime-1").datetimepicker(
    {
      // format: "dd MM yyyy - hh:ii",
      autoclose: true,
      todayBtn: true,
      pickerPosition: "bottom-left",
      language: 'zh-TW',
    }
  );
  $(".js-form_datetime-2").datetimepicker(
    {
      // format: "dd MM yyyy - hh:ii",
      autoclose: true,
      todayBtn: true,
      pickerPosition: "bottom-left",
      language: 'zh-TW',
    }
  );
  
  /* End of datetimepicker
  -------------------------------------------------- */

  
  /*=============================================
  =                   Vue.js                   =
  =============================================*/
  
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
  
  /*============  End of Vue.js  =============*/
  
});
