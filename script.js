// Importação da biblioteca CryptoJS
// Certifique-se de que a biblioteca CryptoJS está sendo carregada corretamente no HTML

function criptografar() {
    var texto = document.getElementById("texto-original").value;
    var chave = document.getElementById("chave").value;
    if (chave.length < 8) {
        alert("Chave muito curta! Use pelo menos 8 caracteres.");
        return;
    }
    var encrypted = CryptoJS.AES.encrypt(texto, chave).toString();
    document.getElementById("resultado").value = encrypted;
}

function descriptografar() {
    var texto = document.getElementById("texto-original").value;
    var chave = document.getElementById("chave").value;
    if (chave.length < 8) {
        alert("Chave muito curta! Use pelo menos 8 caracteres.");
        return;
    }
    try {
        var decrypted = CryptoJS.AES.decrypt(texto, chave).toString(CryptoJS.enc.Utf8);
        document.getElementById("resultado").value = decrypted;
    } catch (e) {
        document.getElementById("resultado").value = "Erro: Chave inválida ou texto não criptografado.";
    }
}

function copiarTexto() {
    var texto = document.getElementById("resultado");
    texto.select();
    document.execCommand("copy");
    
    // Feedback visual
    var btnCopiar = document.querySelector('.btn-success');
    var iconOriginal = btnCopiar.innerHTML;
    btnCopiar.innerHTML = '<i class="fas fa-check"></i> Copiado!';
    btnCopiar.classList.add('btn-info');
    btnCopiar.classList.remove('btn-success');
    
    setTimeout(() => {
        btnCopiar.innerHTML = iconOriginal;
        btnCopiar.classList.add('btn-success');
        btnCopiar.classList.remove('btn-info');
    }, 2000);
}

function gerarChave() {
    var tamanho = parseInt(document.getElementById("tamanho-chave").value);
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%*()_+";
    var chave = "";
    for (var i = 0; i < tamanho; i++) {
        chave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById("chave").value = chave;
}

// Funções adicionais do conversor Base64
function converterParaBase64() {
    var texto = document.getElementById("texto-original").value;
    var base64 = btoa(unescape(encodeURIComponent(texto))); // Suporte a caracteres Unicode
    document.getElementById("resultado").value = base64;
}

function converterDeBase64() {
    var base64 = document.getElementById("texto-original").value;
    try {
        var texto = decodeURIComponent(escape(atob(base64))); // Suporte a caracteres Unicode
        document.getElementById("resultado").value = texto;
    } catch (e) {
        document.getElementById("resultado").value = "Erro: Não é uma string Base64 válida.";
    }
}
