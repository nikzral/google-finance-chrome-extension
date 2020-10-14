function get() {
    var input = document.getElementById("input1").value;
    var url = 'https://www.google.com/search?safe=strict&tbm=fin&sxsrf=ALeKk02bLmeWckDY3RsTO-b8MBLrUVdkLQ:1602695669806&q=' + input + '&stick=H4sIAAAAAAAAAONgecRoyi3w8sc9YSmdSWtOXmNU4-IKzsgvd80rySypFJLgYoOy-KR4uLj0c_UNzKtyjcqSeBax8vg5Brs4Blop-Ln5RAAAvYIf3kkAAAA&sa=X&ved=2ahUKEwitqtDQyrTsAhXBl54KHbgtCC8Qlq4CegQIARAB&biw=1280&bih=721&dpr=2#scso=_EzKHX_VRg_T0A7vzv-AG7:0,_ODKHX4S4C4rL-gTUlZ3IBw7:0,_QDaHX-ToBdTZ9AOsirugDw7:0'

    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
       get();
    });
});