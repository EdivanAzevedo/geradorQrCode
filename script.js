function gerarQrCode() {
    var inputUsuario = document.querySelector("input").value;
    var googleChartApi =
        "https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=";
    var conteudoQrCode = googleChartApi + encodeURI(inputUsuario);
    document.querySelector("#qrCodeImage").src = conteudoQrCode;
}
