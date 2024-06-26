const caminho_certificados: any = {
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
    historico: 'img/historico.png',
    cpp: 'https://storage.googleapis.com/programminghub/certificate%2F1714774178807.jpg',
    java_poo: 'https://storage.googleapis.com/programminghub/certificate%2F1714774822303.jpg',
    mongodb:'https://storage.googleapis.com/programminghub/certificate%2F1714775151021.jpg',
    py_poo: 'https://storage.googleapis.com/programminghub/certificate%2F1714782746711.jpg',
    ecmas: 'https://storage.googleapis.com/programminghub/certificate%2F1714833885436.jpg',
    postgre: 'https://storage.googleapis.com/programminghub/certificate%2F1714857391783.jpg',
    vue: 'https://storage.googleapis.com/programminghub/certificate%2F1716213241712.jpg',
}
const historico: string= 'https://drive.google.com/file/d/1nSa79MkSm2_c8GijR9uUE5tBefjRr1xV/view?usp=sharing';
function exibirCertificado(linguagem: string) {
    const img = document.createElement('img');
    img.src = caminho_certificados[linguagem];
    img.height = 400;
    img.width = 800;

    const divCertificado = document.getElementById('footer');
    if(divCertificado){
        divCertificado.innerHTML = '';
        divCertificado.appendChild(img);
        window.scrollTo({top: divCertificado.offsetTop, behavior: 'smooth'})
    }
}
function exibirLink(linkExterno: string){
    const link = document.createElement('a');
    link.href = linkExterno;
    link.target = "_blank";
    link.textContent = "Link do Certificado";

    const divLink = document.querySelector('.ligacao');
    if(divLink) {
        divLink.innerHTML = '';
        divLink.appendChild(link);
    }
}
function oLink(linguagem: string, linkExterno: string) {
    exibirCertificado(linguagem);
    exibirLink(linkExterno);
    const divLink = document.querySelector('.ligacao');
    if(divLink instanceof HTMLElement){
        divLink.style.display="block"
    }
}

document.getElementById('java-btn')?.addEventListener('click', () => oLink('java', caminho_certificados['java']));
document.getElementById('py-btn')?.addEventListener('click', () => oLink('py', caminho_certificados['py']));
document.getElementById('js-btn')?.addEventListener('click', () => oLink('js', caminho_certificados['js']));
document.getElementById('c-btn')?.addEventListener('click', () => oLink('c_sharp', caminho_certificados['c_sharp']));
document.getElementById('node-btn')?.addEventListener('click', () => oLink('node', caminho_certificados['node']));
document.getElementById('php-btn')?.addEventListener('click', () => oLink('php', caminho_certificados['php']));
document.getElementById('jquery-btn')?.addEventListener('click', () => oLink('jquery', caminho_certificados['jquery']));
document.getElementById('react-btn')?.addEventListener('click', () => oLink('react', caminho_certificados['react']));
document.getElementById('git-btn')?.addEventListener('click', () => oLink('git', caminho_certificados['git']));
document.getElementById('ts-btn')?.addEventListener('click', () => oLink('ts', caminho_certificados['ts']));
document.getElementById('historico-btn')?.addEventListener('click', () => oLink('historico', historico));
document.getElementById('cpp-btn')?.addEventListener('click', () => oLink('cpp', caminho_certificados['cpp']));
document.getElementById('java_poo-btn')?.addEventListener('click', () => oLink('java_poo', caminho_certificados['java_poo']));
document.getElementById('mongoDB-btn')?.addEventListener('click', () => oLink('mongodb', caminho_certificados['mongodb']));
document.getElementById('py_poo-btn')?.addEventListener('click', () => oLink('py_poo', caminho_certificados['py_poo']));
document.getElementById('ecmas-btn')?.addEventListener('click', () => oLink('ecmas', caminho_certificados['ecmas']));
document.getElementById('postgre-btn')?.addEventListener('click', () => oLink('postgre', caminho_certificados['postgre']));
document.getElementById('vue-btn')?.addEventListener('click', () => oLink('vue', caminho_certificados['vue']));

