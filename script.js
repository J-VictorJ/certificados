var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
var caminho_certificados = {
    java: 'https://storage.googleapis.com/programminghub/certificate%2F1713558311222.jpg',
    py: 'https://storage.googleapis.com/programminghub/certificate%2F1713567366317.jpg',
    js: 'https://storage.googleapis.com/programminghub/certificate%2F1713555017184.jpg',
    c_sharp: 'https://storage.googleapis.com/programminghub/certificate%2F1713747973859.jpg',
    node: 'https://storage.googleapis.com/programminghub/certificate%2F1713555727132.jpg',
    php: 'https://storage.googleapis.com/programminghub/certificate%2F1713572720447.jpg',
    jquery: 'https://storage.googleapis.com/programminghub/certificate%2F1713559410388.jpg',
    react: 'https://storage.googleapis.com/programminghub/certificate%2F1714618326995.jpg',
    git: 'https://storage.googleapis.com/programminghub/certificate%2F1713565726368.jpg',
    ts: 'https://storage.googleapis.com/programminghub/certificate%2F1713747239561.jpg',
};
function exibirCertificado(linguagem) {
    var img = document.createElement('img');
    img.src = caminho_certificados[linguagem];
    img.height = 400;
    img.width = 800;
    var divCertificado = document.getElementById('footer');
    if (divCertificado) {
        divCertificado.innerHTML = '';
        divCertificado.appendChild(img);
        window.scrollTo({ top: divCertificado.offsetTop, behavior: 'smooth' });
    }
}
function exibirLink(linkExterno) {
    var link = document.createElement('a');
    link.href = linkExterno;
    link.target = "_blank";
    link.textContent = "Link do Certificado";
    var divLink = document.querySelector('.ligacao');
    if (divLink) {
        divLink.innerHTML = '';
        divLink.appendChild(link);
    }
}
function oLink(linguagem, linkExterno) {
    exibirCertificado(linguagem);
    exibirLink(linkExterno);
    var divLink = document.querySelector('.ligacao');
    if (divLink instanceof HTMLElement) {
        divLink.style.display = "block";
    }
}
(_a = document.getElementById('java-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return oLink('java', caminho_certificados['java']); });
(_b = document.getElementById('py-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return oLink('py', caminho_certificados['py']); });
(_c = document.getElementById('js-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return oLink('js', caminho_certificados['js']); });
(_d = document.getElementById('c-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return oLink('c_sharp', caminho_certificados['c_sharp']); });
(_e = document.getElementById('node-btn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () { return oLink('node', caminho_certificados['node']); });
(_f = document.getElementById('php-btn')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () { return oLink('php', caminho_certificados['php']); });
(_g = document.getElementById('jquery-btn')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () { return oLink('jquery', caminho_certificados['jquery']); });
(_h = document.getElementById('react-btn')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () { return oLink('react', caminho_certificados['react']); });
(_j = document.getElementById('git-btn')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () { return oLink('git', caminho_certificados['git']); });
(_k = document.getElementById('ts-btn')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', function () { return oLink('ts', caminho_certificados['ts']); });
