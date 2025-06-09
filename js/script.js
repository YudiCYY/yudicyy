//toggle class active
const navbarnav = Document.qeryselector('.navbar-nav');
//ketika hhamburger menu di klik
Document.qeryselector('#hamburer-menu').unclick = () => {
    navbarnav.classlist.toggle('active');
};