import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  name: string = 'Jhironsel Diaz A.';
  email: string = 'jhironsel@hotmail.com';
  email2: string = 'jhironseld@gmail.com';
  tel: string = '(829) 297-2015';
  tel2: string = '(849) 221-2022';


  tituloUniversitario: string = 'https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/Eaeqoo7KPS9Fq8ars3WGTlMB6Pw4BuZs2JnREda3XdnjSw?e=Dfzcig';
  cdpic: string = "https://cdpic.org.do/home/colegiados-activos/";
  hogar: string = "https://goo.gl/maps/jHswwqiJh3E9UZZg9";
  hogar2: string = "https://goo.gl/maps/pxU4184YpVMR1U5F9";

  //Carta Laborales
  cartaLaboral: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/EftqRCwtnStGj7Bv_mOxNV8BN_TBV7jZqdlgS-jhTFQPuA?e=7hfOwZ";

  //Certificado de bachiller
  certificado: string =  "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/Ee9bIj_xnJNDvQuKluhOceIBoG-DcwoALWmApU-OKVR2dw?e=m1kjVc";
  diploma: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/Ed_wCRPVmOZEuJcnMlkApyUBiMHLDRug45686UAK-6hClQ?e=qM0Mep";

  //Certificados de INFOTEP
  powerPoint: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAALAAAoP4AAD&val=1";
  manejadorInternet: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAAKAAAr5RAAH&val=1";
  manejadorExcellBasico: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAAKAAAuBiAAP&val=1";
  manejadorExcellIntermedio: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAAEAAAsgUAAl&val=1";
  manejadorExcellAvanzado: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAALAAAp5wAAj&val=1";
  php: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAANAAAtFCAAe&val=1";
  estrategiaEvaluacion: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAAKAAArzrAAT&val=1";
  desarrolloNube: string ="http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAANAAEecGAAQ&val=1";
  googleFormacionVirtual: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAANAAEefMAAg&val=1";
  facilitador: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAANAAEfJEAAk&val=1";
  ciberSeguridad: string = "http://servicios.infotep.gob.do/Certificados/ValidacionCertificado.aspx?id=AAAfxZAANAAEfJEAAk&val=1";

  //MEPROC
  bancaComercial: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/EYyK1J2LLl9DqBK05q3hfHIBW7hwpNLnsPwuCCvix5WYEg?e=eC9SlA";
  bancaComercialIlustre: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/EWme5xEkJx9NhbwClhMbiZ8BdWNBjgWRWr_MeiT0Jun9cw?e=9xdKLU";
  contabilidad: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/EbzOnN087t5KjRz-tQrxfJQBDRN-YyLrs3URM_kc5riYjQ?e=3Ca9BW";

  //MESCYT
  inglesInmersion: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/EdIz1N0sMhNMqIuA12SWJjcBpaF7t9h-JjoqiGJPNbyYIA?e=cge41b";
  ciberSeguridadMESCYT: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/Ee7cRdspyxxPlJ8jE32RHrsBPVC4rICZWqcRKlGsF8cGCA";
  SQLServer: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/EV-d7dLgR3pAlhebXti04IwBxrsbm7odPYqdTD6nfAMZ_Q";


  //Redes sociales y repositorio
  github: string = "https://github.com/jhironsel/";
  bitbutcket: string = "https://bitbucket.org/jhironsel/";
  facebook: string = "https://www.facebook.com/jhironsel";
  linkedin: string = "https://www.linkedin.com/in/jhironsel/";
  youtube: string = "https://www.youtube.com/user/jhironsel";


  javaActivate: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/EfXlHgYjCINBokKe7appxN0B-B8Le0u74zumfYZrPY7nAw";
  soporteTecnico: string = "https://estuasdedu-my.sharepoint.com/:b:/g/personal/ch5760_est_uasd_edu_do/Eee-MRwuktZDujc-wzY2KS0BOR0-zm6qBWA9xJ9qR7ZY-A?e=0DXtIM";


  //Capacitate
  tecnicoRedes: string = "https://capacitateparaelempleo.org/verifica/53f32264-fbf6-41ea-8a51-6c0e516a05e4/01b074e4-aa45-40eb-86f3-76be55fc6a46";
  reparacionComputo: string = "https://capacitateparaelempleo.org/verifica/53f32264-fbf6-41ea-8a51-6c0e516a05e4/f077f9b8-c710-4327-b43b-a1cd1172ae49";
  seguridadInformatica: string = "https://capacitateparaelempleo.org/verifica/53f32264-fbf6-41ea-8a51-6c0e516a05e4/ecc64cd0-6a90-447b-8a7d-255c3c9f870a";
  asistenteWeb: string = "https://capacitateparaelempleo.org/verifica/53f32264-fbf6-41ea-8a51-6c0e516a05e4/f077f9b8-c710-4327-b43b-a1cd1172ae49";
  cobre: string = "https://capacitateparaelempleo.org/verifica/53f32264-fbf6-41ea-8a51-6c0e516a05e4/1608a952-b520-4be5-b46a-aa189c708f1a";
  introduccionProgramacion: string = "https://capacitateparaelempleo.org/verifica/53f32264-fbf6-41ea-8a51-6c0e516a05e4/74e29355-d6df-4f94-8f79-82be9e263f4e";
  constructor() { }

  ngOnInit(): void {
  }

}
