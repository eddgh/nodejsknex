// import { useState } from 'react';
import Paciente from './components/paciente'

function App() {

  // const [listaPacientes, setListaPacientes] = useState([]);

  // useEffect(() => {
  //   async function carregaPacientes() {
  //     try {
  //       const response = await fetch('http://localhost:3333/pacientes');
  //       const dados = await response.json();
  //       setListaPacientes(dados);
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   carregaPacientes();
  // }, [])

  listaPacientes = [
    {
      nome: 'ADAIL SILVA FILHO',
      escala: '05',
      turno: '2',
      codigo: '0000755',
      num_reg: '22B390D5-CC74-4480-A45B-6404B5CC1EB9'
    },
    {
      nome: 'ADENIS SANTANA',
      escala: '05',
      turno: '1',
      codigo: '0000528',
      num_reg: 'BD6146B7-50D5-43D3-B98A-9F189C6753D1'
    },
    {
      nome: 'ADRIANA DE OLIVEIRA CECILIO GONZAGA',
      escala: '04',
      turno: '2',
      codigo: '0000691',
      num_reg: '7D1B9F90-0A1A-43B7-A973-3A6163F9429A'
    },
    {
      nome: 'ALBERTO DA SILVA CARVALHO',
      escala: '05',
      turno: '1',
      codigo: '0000434',
      num_reg: '32EEB853-EFCE-4363-8431-6A5AC6FC3B64'
    },
    {
      nome: 'ALEXANDRE LOPES PACHECO',
      escala: '05',
      turno: '1',
      codigo: '0000767',
      num_reg: 'E75C6D84-30B4-4414-A368-5A41616E1BA1'
    },
    {
      nome: 'ALINE STAEL DA SILVA',
      escala: '05',
      turno: '1',
      codigo: '0000065',
      num_reg: '411F33D6-2100-43A7-B7F3-7C39D9446FBD'
    },
    {
      nome: 'ALTAMIR COUTO FILHO',
      escala: '05',
      turno: '2',
      codigo: '0000530',
      num_reg: '331F8CC7-281E-4ADA-88C5-438B7CBAD0DA'
    },
    {
      nome: 'AMARILDO MARINS DA SILVA',
      escala: '04',
      turno: '2',
      codigo: '0000398',
      num_reg: 'AF2CC215-1582-43CB-9D70-1E12FED0C49C'
    },
    {
      nome: 'ANDRÉ LUÍS VILELA',
      escala: '04',
      turno: '1',
      codigo: '0000697',
      num_reg: '47A32B47-9F96-4C18-AE13-07244A0AD5A4'
    },
    {
      nome: 'ANDREIA MOTTA DA COSTA',
      escala: '05',
      turno: '1',
      codigo: '0000023',
      num_reg: 'BD596458-FAEC-4A2F-AAD0-61DF978B71D4'
    },
    {
      nome: 'ANTONIO CARLOS DE OLIVEIRA',
      escala: '04',
      turno: '2',
      codigo: '0000679',
      num_reg: '9173E788-A453-474D-BD9F-D2ECFE7C70DE'
    },
    {
      nome: 'ANTONIO CARLOS TAVARES DA CRUZ',
      escala: '05',
      turno: '3',
      codigo: '0000810',
      num_reg: '04365CD8-D87E-4DD1-8E16-C650E83FC763'
    },
    {
      nome: 'ANTONIO LINO',
      escala: '05',
      turno: '2',
      codigo: '0000784',
      num_reg: 'BC2F25C4-0A97-4675-8BCF-080A19DAD317'
    },
    {
      nome: 'BETUEL DOS REIS DA SILVA',
      escala: '05',
      turno: '1',
      codigo: '0000785',
      num_reg: '5763FD29-BCED-4B59-8080-B2F5B45B5BF6'
    },
    {
      nome: 'BIANCA MORAES CEZIMBRA',
      escala: '04',
      turno: '1',
      codigo: '0000776',
      num_reg: '9F57BB33-6EF6-4C22-B7FA-9F0AA1D35E2B'
    },
    {
      nome: 'CARLOS ROBERTO COUTINHO DE ARAUJO',
      escala: '05',
      turno: '2',
      codigo: '0000709',
      num_reg: '484644BA-B75B-4E40-9A19-B1AB4DB84EDA'
    },
    {
      nome: 'CATELLYN OLIVEIRA DOS SANTOS',
      escala: '04',
      turno: '3',
      codigo: '0000656',
      num_reg: '600D980B-915B-4E50-B225-A7751FED1E27'
    },
    {
      nome: 'CELIA REGINA ALVES CARVALHO',
      escala: '04',
      turno: '2',
      codigo: '0000733',
      num_reg: '58685F79-B496-4B7D-AB53-A3731E0B8932'
    },
    {
      nome: 'CLAUDIA CRISTINA DA C ARAUJO DA SILVA',
      escala: '05',
      turno: '1',
      codigo: '0000638',
      num_reg: '2BBCF37F-9DFE-4B87-8CFC-259C79B049B7'
    },
    {
      nome: 'CLAUDIO DE SOUZA NICOLAU',
      escala: '04',
      turno: '1',
      codigo: '0000566',
      num_reg: '882E67DF-5BB4-42EE-8D78-99D0EB1C1331'
    },
    {
      nome: 'CREUZA TOLEDO',
      escala: '05',
      turno: '2',
      codigo: '0000229',
      num_reg: '98A6B0BA-3571-498C-AB6E-C625F0E8BF3A'
    },
    {
      nome: 'CRISTINA  BARBOSA MARQUES',
      escala: '05',
      turno: '3',
      codigo: '0000822',
      num_reg: '7926E575-948C-4BA2-BA39-D9C6486C9490'
    },
    {
      nome: 'DAVID MARTINS DA SILVA',
      escala: '04',
      turno: '3',
      codigo: '0000817',
      num_reg: 'C776A859-8FB5-4EC6-8532-7889C4E9F756'
    },
    {
      nome: 'DIUMAR IBA GONÇALVES',
      escala: '04',
      turno: '2',
      codigo: '0000476',
      num_reg: '8393A0DC-D564-4137-B04B-E1185B7D94F9'
    },
    {
      nome: 'DOMINGOS SÁVIO DANTAS PEREIRA',
      escala: '04',
      turno: '2',
      codigo: '0000789',
      num_reg: '3B82B706-7E7E-491B-ADF2-DE262E1B390B'
    },
    {
      nome: 'DOUGLAS SOARES BERNARDES',
      escala: '04',
      turno: '2',
      codigo: '0000451',
      num_reg: '179215E3-AAA8-410F-A689-C75C5C2E5768'
    },
    {
      nome: 'EDILAINE RIBEIRO DE MOURA',
      escala: '04',
      turno: '2',
      codigo: '0000752',
      num_reg: 'D02539B4-5D6E-41F3-AADC-90EA43C67C72'
    },
    {
      nome: 'EDIR FERREIRA LIMA',
      escala: '04',
      turno: '3',
      codigo: '0000772',
      num_reg: '093A637F-E315-43D5-8905-DF94DA1F2BE8'
    },
    {
      nome: 'EDSON DANYLO DE CARVALHO MOTTA',
      escala: '04',
      turno: '1',
      codigo: '0000475',
      num_reg: '1063404E-26B0-404B-A01F-E5875E93D79D'
    },
    {
      nome: 'ELENY BARBOZA DOS SANTOS',
      escala: '04',
      turno: '3',
      codigo: '0000717',
      num_reg: '5D892210-92E7-42D0-B508-1B0194C1DEBF'
    },
    {
      nome: 'EUCIMAR MAGALHAES MONTEIRO',
      escala: '05',
      turno: '3',
      codigo: '0000342',
      num_reg: 'EC26D4F5-7DF1-4365-B11C-881704F0231F'
    },
    {
      nome: 'EVA FLORISBELA DA SILVA FERREIRA',
      escala: '04',
      turno: '3',
      codigo: '0000828',
      num_reg: 'A485F621-972D-49A6-AA8B-80D30B01F5E7'
    },
    {
      nome: 'FABIANA DE JESUS DA SILVA',
      escala: '04',
      turno: '1',
      codigo: '0000331',
      num_reg: '9FCD15CC-66F8-4268-9AD1-3E874B868E2E'
    },
    {
      nome: 'FABIO ROGERIO DOS SANTOS',
      escala: '04',
      turno: '1',
      codigo: '0000759',
      num_reg: 'F97C9E00-2BAB-4DFF-BAB1-1E182B00331C'
    },
    {
      nome: 'FATIMA SOLANGE DA SILVA SOARES FERREIRA',
      escala: '05',
      turno: '1',
      codigo: '0000632',
      num_reg: 'E448F3F7-BE41-478D-8C13-8EAF391F6881'
    },
    {
      nome: 'FELIPE BARROS NEVES',
      escala: '04',
      turno: '1',
      codigo: '0000175',
      num_reg: '1B4E7E24-AFFF-4705-A44C-9DB5534FB508'
    },
    {
      nome: 'FELIPE MARQUES DOS SANTOS',
      escala: '04',
      turno: '1',
      codigo: '0000805',
      num_reg: 'CC13FC4B-ABD9-4495-8572-8118F6C5DC2A'
    },
    {
      nome: 'FLAVIA SILVA DE JESUS',
      escala: '05',
      turno: '1',
      codigo: '0000649',
      num_reg: '3B1E05E7-37D1-460A-9484-7964FA581CE0'
    },
    {
      nome: 'FRANCISCO NEVES DA SILVA',
      escala: '04',
      turno: '2',
      codigo: '0000009',
      num_reg: '6E639891-C73E-4678-9F17-5550614F02CC'
    },
    {
      nome: 'GILBERTO COSTA ARAUJO',
      escala: '04',
      turno: '3',
      codigo: '0000808',
      num_reg: 'F633BC2A-BCDA-4C6A-B8AE-54C954494679'
    },
    {
      nome: 'GILBERTO THOMAZ RIBEIRO',
      escala: '05',
      turno: '3',
      codigo: '0000740',
      num_reg: 'F3579A71-BE71-46DC-B6AB-9D2A3B144C4C'
    },
    {
      nome: 'GILMARA DE SOUZA BARBOSA',
      escala: '04',
      turno: '3',
      codigo: '0000556',
      num_reg: 'C6B3053C-1FB8-43CD-9474-B5C3DC932383'
    },
    {
      nome: 'GUILHERME DOS SANTOS  ANDRADE FILHO',
      escala: '04',
      turno: '3',
      codigo: '0000708',
      num_reg: 'C4BF59AE-BC12-4367-A9B5-85AF97D8337A'
    },
    {
      nome: 'HORACY DE AQUINO FREIRE',
      escala: '04',
      turno: '2',
      codigo: '0000231',
      num_reg: 'A35FC166-A0D2-4330-A9F2-878B0D90D733'
    },
    {
      nome: 'HUDSON ALEXANDRE DIAS DE BARROS',
      escala: '04',
      turno: '1',
      codigo: '0000437',
      num_reg: 'EF543D0B-4960-4AB3-9B4C-555B1A2762AE'
    },
    {
      nome: 'ISABELA DARANA BELO DE SOUZA',
      escala: '05',
      turno: '1',
      codigo: '0000340',
      num_reg: '61721BEC-7AE0-4317-9B28-A06A5FC67BD6'
    },
    {
      nome: 'IVANILDA MARIA RIBEIRO',
      escala: '05',
      turno: '2',
      codigo: '0000416',
      num_reg: 'BF97199F-F200-4241-B382-169BD596B938'
    },
    {
      nome: 'JANDAIA QUINTINO CUSTODIO',
      escala: '04',
      turno: '2',
      codigo: '0000825',
      num_reg: 'CCA17F85-693D-494A-A296-FB25869ADEBC'
    },
    {
      nome: 'JOAO BARBOSA',
      escala: '05',
      turno: '3',
      codigo: '0000712',
      num_reg: 'C1B9F861-00B0-41B2-82B7-FB8143719EC1'
    },
    {
      nome: 'JOÃO BATISTA DE OLIVEIRA',
      escala: '05',
      turno: '1',
      codigo: '0000324',
      num_reg: 'B28FA247-ED90-42E4-A4BD-B92426C1C871'
    },
    {
      nome: 'JOÃO CARLOS DOS SANTOS CHAVES',
      escala: '04',
      turno: '3',
      codigo: '0000824',
      num_reg: '9A1F7968-CDB4-4A9A-AF7E-68CDB3B6839F'
    },
    {
      nome: 'JOAO DE ARAUJO FARIAS',
      escala: '04',
      turno: '1',
      codigo: '0000811',
      num_reg: '36260040-2B16-4C0A-8627-2964AB4735AD'
    },
    {
      nome: 'JOEL DA SILVA RAMOS',
      escala: '05',
      turno: '3',
      codigo: '0000749',
      num_reg: 'BE2C635B-3DC7-4605-BA73-0582E8D6FD29'
    },
    {
      nome: 'JONAS DESIDERIO DE SOUZA',
      escala: '04',
      turno: '1',
      codigo: '0000593',
      num_reg: '255570F4-490B-4166-B3AD-097BA1A7006E'
    },
    {
      nome: 'JONAS VIEIRA BENTO',
      escala: '05',
      turno: '2',
      codigo: '0000288',
      num_reg: 'C4FF7B08-0CA2-4313-8246-225C052018B1'
    },
    {
      nome: 'JORCIDEL DA SILVA PEREIRA',
      escala: '05',
      turno: '1',
      codigo: '0000791',
      num_reg: '25B4BD03-E7B9-43B0-B38B-0809304123C9'
    },
    {
      nome: 'JORGE ADRIANO BEATMAN FARIAS',
      escala: '05',
      turno: '1',
      codigo: '0000445',
      num_reg: '5AD986E8-28AD-4BDD-BB45-C55CB83C51A3'
    },
    {
      nome: 'JORGE BARBOSA DA SILVA',
      escala: '04',
      turno: '3',
      codigo: '0000643',
      num_reg: '06733989-89B6-422F-93BC-DD0A0D37F7AF'
    },
    {
      nome: 'JORGE DE JESUS FREITAS FILHO',
      escala: '04',
      turno: '3',
      codigo: '0000702',
      num_reg: '26192617-5903-4946-B395-60BE14ECF39C'
    },
    {
      nome: 'JORGE EDUARDO DE CARVALHO RIBEIRO',
      escala: '05',
      turno: '1',
      codigo: '0000623',
      num_reg: '82F570EE-5943-446F-A5A8-F56D25C58080'
    },
    {
      nome: 'JORGE JOSÉ LINS DA SILVA',
      escala: '05',
      turno: '2',
      codigo: '0000667',
      num_reg: '0B835E05-C053-42B9-8E5D-4204DB4038C7'
    },
    {
      nome: 'JORGE LUIZ MANUEL DA SILVA NOGUEIRA',
      escala: '04',
      turno: '3',
      codigo: '0000436',
      num_reg: '7A8E3F04-B04A-4FAD-928D-FB3EC448CA79'
    },
    {
      nome: 'JORGE MOTA DA CRUZ',
      escala: '05',
      turno: '1',
      codigo: '0000766',
      num_reg: '67A052CE-D2ED-4A21-A8D7-394A138EC785'
    },
    {
      nome: 'JORGE RANGEL ROCA',
      escala: '04',
      turno: '3',
      codigo: '0000668',
      num_reg: '9AC1F41E-820D-4F3A-99A0-254DA46649F8'
    },
    {
      nome: 'JOSE AREIAS MARINS',
      escala: '04',
      turno: '1',
      codigo: '0000591',
      num_reg: '8F9F2F55-CED4-45F5-A747-CEDDDA5533F8'
    },
    {
      nome: 'JOSE FRANCISCO DOS SANTOS AZEVEDO',
      escala: '05',
      turno: '2',
      codigo: '0000812',
      num_reg: '940BF84C-ED26-4B33-9929-45FC70BF6141'
    },
    {
      nome: 'JOSÉ MARTINS DE OLIVEIRA FILHO',
      escala: '04',
      turno: '2',
      codigo: '0000316',
      num_reg: '27B96553-AAE0-4493-AC38-E8B650EB9B24'
    },
    {
      nome: 'JOSE RONALD DE CARVALHO',
      escala: '05',
      turno: '2',
      codigo: '0000716',
      num_reg: '39677618-A81F-435C-9FE1-70F04562C5A4'
    },
    {
      nome: 'JOSE VITAL DE SOUZA NETTO',
      escala: '04',
      turno: '3',
      codigo: '0000261',
      num_reg: '962EE0AD-533E-4991-A9BD-1B1A535E1915'
    },
    {
      nome: 'JULIO CESAR CORDEIRO DA SILVA',
      escala: '04',
      turno: '1',
      codigo: '0000523',
      num_reg: '01636025-24CA-4C79-A5A9-AE73D1874599'
    },
    {
      nome: 'KAMILA ALBUQUERQUE DE AZEVEDO',
      escala: '04',
      turno: '3',
      codigo: '0000714',
      num_reg: '113530FB-B1CE-437C-A801-24DE5CCB2625'
    },
    {
      nome: 'LAFAETE NOGUEIRA TEIXEIRA',
      escala: '04',
      turno: '2',
      codigo: '0000671',
      num_reg: '149FA2F2-EF3D-428A-B097-10EF2AC0CF8D'
    },
    {
      nome: 'LARISSA NEVES MEDEIROS NASCIMENTO',
      escala: '04',
      turno: '3',
      codigo: '0000322',
      num_reg: '76CAFEFE-3107-4AE9-B17A-00268CE1957C'
    },
    {
      nome: 'LARISSA OLIVEIRA MARTINS',
      escala: '04',
      turno: '1',
      codigo: '0000650',
      num_reg: 'A7457C44-218B-401F-9783-81FAD73F907A'
    },
    {
      nome: 'LEANDRO ARRUDA DE OLIVEIRA',
      escala: '05',
      turno: '3',
      codigo: '0000830',
      num_reg: '5B1D9957-697D-489D-93CA-9644D4F3384E'
    },
    {
      nome: 'LEANDRO SALLES DE SOUZA',
      escala: '04',
      turno: '3',
      codigo: '0000763',
      num_reg: '29441BFD-F4B2-4A96-B74F-8AC87527F01B'
    },
    {
      nome: 'LEONARDO FERREIRA DA SILVA',
      escala: '05',
      turno: '3',
      codigo: '0000738',
      num_reg: 'EAC77459-AF4C-414B-AC8E-AF57767A0226'
    },
    {
      nome: 'LUCIA CLAUDIA DIAS DE LIMA',
      escala: '04',
      turno: '1',
      codigo: '0000500',
      num_reg: '97600F77-FF14-4306-BF65-50C8CE4B9EC1'
    },
    {
      nome: 'LUCIA HELENA ANDRE DOS SANTOS',
      escala: '04',
      turno: '2',
      codigo: '0000571',
      num_reg: '22E7A962-6A79-4404-B7EB-E5B62BB87459'
    },
    {
      nome: 'LUCIA MARIA SILVA MARQUES',
      escala: '05',
      turno: '3',
      codigo: '0000801',
      num_reg: '87E46F24-EB89-4B93-8B7D-CA3631A32B0D'
    },
    {
      nome: 'LUCIANA DA SILVA MACHADO',
      escala: '05',
      turno: '3',
      codigo: '0000826',
      num_reg: '159A5D01-C673-4AC0-A0E2-18F263111219'
    },
    {
      nome: 'LUCILÉA GOMES FERREIRA',
      escala: '05',
      turno: '2',
      codigo: '0000736',
      num_reg: '9B151063-BD18-4FDA-9034-36B8BC576134'
    },
    {
      nome: 'LUCIO FERNANDO DOS SANTOS',
      escala: '05',
      turno: '2',
      codigo: '0000806',
      num_reg: '5D11EFE0-8C9F-4ABB-AD07-79C45F041775'
    },
    {
      nome: 'LUIZ CARLOS XAVIER SALES',
      escala: '05',
      turno: '3',
      codigo: '0000829',
      num_reg: '9AEF0AE4-BAF3-4F9E-A870-936F91176FB1'
    },
    {
      nome: 'LUIZ CLAUDIO VENTURA MARTINS',
      escala: '05',
      turno: '2',
      codigo: '0000746',
      num_reg: 'E5F9C9A9-2BC2-40E8-BE07-501D371B1953'
    },
    {
      nome: 'LUIZ EDUARDO PEREIRA DE ALMEIDA',
      escala: '04',
      turno: '1',
      codigo: '0000167',
      num_reg: '7180F647-2A28-42F1-99EA-5FDD92A5B3C4'
    },
    {
      nome: 'LUIZ GONZAGA DE OLIVEIRA',
      escala: '04',
      turno: '3',
      codigo: '0000741',
      num_reg: '0D755066-4AC9-4D9E-87A9-3582FB125CD8'
    },
    {
      nome: 'LUIZ NILTON LIMA VIANA',
      escala: '05',
      turno: '3',
      codigo: '0000721',
      num_reg: 'B3F9E58C-9C26-4E70-B20E-3D1B8E84C371'
    },
    {
      nome: 'MARCELLY MENDES FARIA GALIETTI',
      escala: '05',
      turno: '1',
      codigo: '0000518',
      num_reg: '68FF235E-0BC4-463D-97C5-947E5763DC99'
    },
    {
      nome: 'MARCELO ANTUNES SANT ANNA',
      escala: '04',
      turno: '2',
      codigo: '0000024',
      num_reg: 'BCBE6C66-5A7C-4D95-B2B6-2E6B36D92F35'
    },
    {
      nome: 'MARCIA REGINA FELICIO COSTA',
      escala: '05',
      turno: '1',
      codigo: '0000621',
      num_reg: '5364ACD0-128C-4693-927B-6B8DFC9F68B1'
    },
    {
      nome: 'MARCIA VALERIA FERREIRA BASTOS',
      escala: '05',
      turno: '2',
      codigo: '0000381',
      num_reg: '13F980CA-74F2-4E6A-9CF5-025C7B2D1DA5'
    },
    {
      nome: 'MARCO ANTONIO DE ALMEIDA MONTALTO',
      escala: '05',
      turno: '2',
      codigo: '0000771',
      num_reg: '1F8894E8-992E-4BC5-8A47-95C7EF62608D'
    },
    {
      nome: 'MARCOS VINICIO PEREIRA GAMBI',
      escala: '04',
      turno: '3',
      codigo: '0000483',
      num_reg: '4078BD43-7882-44D8-B1CE-A59C70F864AA'
    },
    {
      nome: 'MARIA CORDEIRO ANTUNES',
      escala: '05',
      turno: '2',
      codigo: '0000382',
      num_reg: 'CD13956D-4AA5-40C7-AAC0-6F13501BAFE0'
    },
    {
      nome: 'MARIA DA CONCEIÇÃO DA SILVA VASCONCELLOS',
      escala: '04',
      turno: '1',
      codigo: '0000707',
      num_reg: '42BA1EDD-EC9A-4AA0-ACC4-C90A8CB9ADC9'
    },
    {
      nome: 'MARIA GORETE VIEIRA MELO',
      escala: '05',
      turno: '2',
      codigo: '0000240',
      num_reg: '35EC520B-F683-41EC-A09E-220D9C65CEE3'
    },
    {
      nome: 'MARIA JURACI FAUSTINO BARBOSA',
      escala: '05',
      turno: '3',
      codigo: '0000831',
      num_reg: 'C335E991-B009-4FB3-A677-9EDBA522371F'
    },
    {
      nome: 'MARIA LUSINEIDE DE ARAÚJO RIBEIRO',
      escala: '04',
      turno: '1',
      codigo: '0000764',
      num_reg: '8104BF1C-973A-49D1-AE56-7BC10D5D4B74'
    },
    {
      nome: 'MARISE TERESA MACHADO ULRICHSEN',
      escala: '04',
      turno: '2',
      codigo: '0000795',
      num_reg: '0D17C33A-9C33-46BA-BCF4-FDE418D93E1A'
    },
    {
      nome: 'MARLENE PEREIRA DOS SANTOS',
      escala: '04',
      turno: '1',
      codigo: '0000298',
      num_reg: '45FEEE5A-4CCE-45B1-B8F8-8CBB6DFE32DB'
    },
    {
      nome: 'MAURILIO ROSA DA CRUZ',
      escala: '05',
      turno: '2',
      codigo: '0000684',
      num_reg: '2B2CC0EF-4170-4B69-8318-DEF35CDE4681'
    },
    {
      nome: 'MICHELE SILVA DE OLIVEIRA',
      escala: '04',
      turno: '1',
      codigo: '0000728',
      num_reg: 'B24F32BF-BB2A-45BC-BF7B-03974C12D9F8'
    },
    {
      nome: 'MICHELE VALERIA DE SOUZA BORGES',
      escala: '04',
      turno: '1',
      codigo: '0000309',
      num_reg: '0438EEA4-560B-4EE4-A32A-DF861CA83BCE'
    },
    {
      nome: 'MILTON CARLOS DE ARAUJO',
      escala: '04',
      turno: '3',
      codigo: '0000410',
      num_reg: 'AF6B432F-D705-4878-8435-46EBFD356ED1'
    },
    {
      nome: 'MOZART DOS SANTOS',
      escala: '05',
      turno: '1',
      codigo: '0000794',
      num_reg: '3F947292-86D8-4E58-AE60-7E790BAF77A7'
    },
    {
      nome: 'NEDIR COELHO DA COSTA',
      escala: '05',
      turno: '2',
      codigo: '0000678',
      num_reg: '9956AF7E-3C31-43F3-BC88-BF4220A72791'
    },
    {
      nome: 'NELI FELICIANO',
      escala: '05',
      turno: '2',
      codigo: '0000013',
      num_reg: '6E15FEA0-D4DB-482D-8A1A-2DB949A8FF6A'
    },
    {
      nome: 'PABLO SOARES DE FREITAS',
      escala: '04',
      turno: '2',
      codigo: '0000450',
      num_reg: '4A2798B3-A1C2-42B0-A16B-CB2D7845C6F3'
    },
    {
      nome: 'PAULO  CESAR ALVES DE ALVARENGA',
      escala: '05',
      turno: '1',
      codigo: '0000786',
      num_reg: '14879D43-2D6D-4CD5-9256-2E89C449B9F3'
    },
    {
      nome: 'PAULO HENRIQUE TOLEDO MENEZES',
      escala: '04',
      turno: '3',
      codigo: '0000582',
      num_reg: 'DA137318-FF5F-4A48-91C2-DB5D563ACE7E'
    },
    {
      nome: 'PEDRO ROBERTO GONÇALVES DA SILVA',
      escala: '04',
      turno: '2',
      codigo: '0000775',
      num_reg: '31FEF923-89A6-4465-BD4F-8DB5FFA06F02'
    },
    {
      nome: 'PRISCILA SILVA LEITE CRUZ',
      escala: '04',
      turno: '2',
      codigo: '0000823',
      num_reg: '209A8C8F-7007-407D-8AC5-1D39346D6494'
    },
    {
      nome: 'RAPHAEL MARINS VALLADAO',
      escala: '05',
      turno: '3',
      codigo: '0000596',
      num_reg: '87005CD6-60E2-4519-A7D7-5310D4784EFB'
    },
    {
      nome: 'REGINALDO WAGNER DA SILVA',
      escala: '05',
      turno: '1',
      codigo: '0000715',
      num_reg: 'B311CF37-46CE-4F30-9ED2-A248660D1E51'
    },
    {
      nome: 'RENAN LEONARDO SAMPAIO DE FIGUEIREDO',
      escala: '04',
      turno: '3',
      codigo: '0000821',
      num_reg: '10640B80-6E09-41B5-A79B-7867A6A54127'
    },
    {
      nome: 'RENATA RIBEIRO DA SILVA',
      escala: '04',
      turno: '1',
      codigo: '0000559',
      num_reg: 'FD084F04-32E0-4E0C-BD53-E875D63045AF'
    },
    {
      nome: 'RENE DE PAULA DO NASCIMENTO',
      escala: '05',
      turno: '2',
      codigo: '0000681',
      num_reg: 'C13B7E57-18E0-4EF5-BB01-3C4CE56B4295'
    },
    {
      nome: 'RENI DA SILVA RIBEIRO',
      escala: '04',
      turno: '3',
      codigo: '0000788',
      num_reg: 'EECC798C-264B-4517-80BA-0703AFEB995B'
    },
    {
      nome: 'RENILDA PEREIRA DE SOUZA',
      escala: '04',
      turno: '1',
      codigo: '0000249',
      num_reg: '9FE9AFE1-DBA4-4AAC-86D6-1C11A413DBE7'
    },
    {
      nome: 'ROBERTO AZEVEDO BADARO',
      escala: '04',
      turno: '2',
      codigo: '0000634',
      num_reg: 'FC9F1C41-8509-4769-A501-914635FBF24B'
    },
    {
      nome: 'ROBERTO VENTURA LOURENÇO',
      escala: '05',
      turno: '3',
      codigo: '0000797',
      num_reg: '87A7D378-1266-497B-B241-6AA1149FDD3A'
    },
    {
      nome: 'RODOLFO CARLOS DOS SANTOS',
      escala: '05',
      turno: '2',
      codigo: '0000729',
      num_reg: 'BE19AAE8-FBC4-49E4-8D18-14C74A735594'
    },
    {
      nome: 'ROMEU GONÇALVES DE FREITAS',
      escala: '05',
      turno: '3',
      codigo: '0000604',
      num_reg: 'A25416ED-F5F9-47D4-8675-8930152426AD'
    },
    {
      nome: 'ROMILDO ALVES COUTINHO',
      escala: '05',
      turno: '3',
      codigo: '0000689',
      num_reg: '74F2FAA1-762C-42F3-8881-C2608060CA12'
    },
    {
      nome: 'ROSANGELA MARIA RIBEIRO',
      escala: '04',
      turno: '3',
      codigo: '0000827',
      num_reg: 'ED30DE05-5D9A-4ACC-AF19-940FE9BFD100'
    },
    {
      nome: 'ROSIMERI MOYSES DOS SANTOS',
      escala: '04',
      turno: '2',
      codigo: '0000647',
      num_reg: '9FD6BA0D-6E2E-4E9E-B627-7E5F32A38033'
    },
    {
      nome: 'RUTH DA FONSECA PACHECO',
      escala: '05',
      turno: '1',
      codigo: '0000079',
      num_reg: '5CF8FADE-0A03-4129-AF3C-D1499BBBEFEA'
    },
    {
      nome: 'SANDRA REGINA COCO',
      escala: '05',
      turno: '3',
      codigo: '0000813',
      num_reg: '5CC4E081-FF0B-4307-B497-20DA1C9F1768'
    },
    {
      nome: 'SEBASTIANA CORDEIRO',
      escala: '05',
      turno: '1',
      codigo: '0000756',
      num_reg: 'C0AE88F8-1619-4F76-B1BD-E444D93BDCA7'
    },
    {
      nome: 'SERGIO AUGUSTO PEREIRA DE OLIVEIRA',
      escala: '04',
      turno: '3',
      codigo: '0000592',
      num_reg: 'D8DC99B8-3778-4825-A132-AA1B995C8236'
    },
    {
      nome: 'SIDCLEI CARDOSO BARBOSA',
      escala: '05',
      turno: '1',
      codigo: '0000160',
      num_reg: '9B19A975-F876-4FD9-BBF6-20BE6D6E348F'
    },
    {
      nome: 'SILAS CARVALHO DA COSTA',
      escala: '05',
      turno: '2',
      codigo: '0000364',
      num_reg: '16FD9F98-D0DD-4AAE-8448-0CF5D8D0AD2C'
    },
    {
      nome: 'SILVIA CRISTINA ABREU  SILVA',
      escala: '05',
      turno: '2',
      codigo: '0000672',
      num_reg: '0019E07D-42C0-4671-A05B-26D9B23C496B'
    },
    {
      nome: 'SIMPLICIO DA SILVA FILHO',
      escala: '04',
      turno: '2',
      codigo: '0000580',
      num_reg: 'ADA7943D-8B39-45A1-8C10-6A922F14B687'
    },
    {
      nome: 'TANIA MARIA DA SILVA BASTOS',
      escala: '05',
      turno: '1',
      codigo: '0000819',
      num_reg: 'F2D4116F-7A4C-4C0D-93F2-34AC46495E66'
    },
    {
      nome: 'TERESA SEVERINA DA SILVA',
      escala: '05',
      turno: '2',
      codigo: '0000796',
      num_reg: 'E87F7D24-FFA0-4E53-B494-B3C33336BFEE'
    },
    {
      nome: 'UBIRATAN FERREIRA GUIMARÃES',
      escala: '05',
      turno: '1',
      codigo: '0000818',
      num_reg: '1D96B533-2183-453C-871C-B60916B25375'
    },
    {
      nome: 'VALDINEA DE SOUZA CLEM GONCALVES',
      escala: '04',
      turno: '2',
      codigo: '0000611',
      num_reg: '185301E8-9A52-469C-87AC-E09EF038F3A7'
    },
    {
      nome: 'VALDINEI GARCIA DA SILVA',
      escala: '04',
      turno: '1',
      codigo: '0000683',
      num_reg: '89090E52-6410-449B-B7A8-4B629A361744'
    },
    {
      nome: 'VALERIA DE SOUZA MACHADO',
      escala: '04',
      turno: '3',
      codigo: '0000444',
      num_reg: '71CD69E2-9F7B-4728-93B5-4760FEE4ADB4'
    },
    {
      nome: 'VANDO FERREIRA CIRINO',
      escala: '04',
      turno: '2',
      codigo: '0000538',
      num_reg: '717043C4-18B5-4BD6-BF69-063AB119E209'
    },
    {
      nome: 'VERA DA PENHA ALMEIDA VALADÃO',
      escala: '04',
      turno: '2',
      codigo: '0000359',
      num_reg: '336C1A62-ABDE-4C18-AE94-36E41DEAE521'
    },
    {
      nome: 'VILMA SILVA DE MENDONÇA',
      escala: '04',
      turno: '2',
      codigo: '0000814',
      num_reg: '09E6620B-F7A7-4E46-B1D7-B7631CF6BD8D'
    },
    {
      nome: 'WABER DAVID DA COSTA MACHADO',
      escala: '04',
      turno: '1',
      codigo: '0000753',
      num_reg: '798CBE0C-4F88-4144-AE9E-2C62F3840A54'
    },
    {
      nome: 'WANDERLEI ANICETO DA SILVA OLIVEIRA',
      escala: '04',
      turno: '1',
      codigo: '0000618',
      num_reg: 'B48AC535-952E-40C8-B979-9608D2E45C55'
    },
    {
      nome: 'WANDERSON BOTELHO MORENO',
      escala: '05',
      turno: '3',
      codigo: '0000710',
      num_reg: '042E1EB7-C1A1-4AFE-B35F-DE4F644BCDA9'
    },
    {
      nome: 'WILLIAN FERREIRA DIAS',
      escala: '04',
      turno: '2',
      codigo: '0000802',
      num_reg: '6D766422-B5AE-4F61-938F-1BE409F44E44'
    },
    {
      nome: 'YGOR ANTUNES MARINS DA MOTTA',
      escala: '04',
      turno: '1',
      codigo: '0000427',
      num_reg: '3173D42D-EEFB-48D5-A51E-22BAF99F9079'
    },
    {
      nome: 'YOURI BATISTA CRUZ',
      escala: '05',
      turno: '1',
      codigo: '0000290',
      num_reg: 'B37BD930-8F2F-44EE-B271-1478E4DF446D'
    }
  ]


  return (
    <>
      {listaPacientes && (
        listaPacientes.map((paciente, index) => {
          return (
            <Paciente
              key={index}
              paciente={paciente}
            //nome{pacientenome
            //escala{pacienteescala
            //turno{pacienteturno
            //codigo{pacientecodigo
            //num_reg{pacientenum_reg
            />
          )
        })
      )}
    </>
  )
}

export default App
