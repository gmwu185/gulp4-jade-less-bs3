/* main.js
-------------------------------------------------- */

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
  
});


/* End of main.js
-------------------------------------------------- */
