import {Voo} from "./Voo"
import {Pacote} from "./Pacote"
import {descricao} from "./descricao"

const jsonBruto ='{" id_voo ": "DRN -7742" , " data_envio ": "2026 -04 -28" , " detalhes ": { "altitude_max ": 120 , "sensores ": [" GPS " , " Termometro " , " Lidar "] }, " pacotes ": [ {"peso ": 1.2 , " descricao ": " Medicamentos "} , {" peso ": 0.8 , " descricao ": " Suprimentos "}] }';

 class Main {
    static executar () {
 const dadosSimulados = JSON.parse(jsonBruto);
 console.log(" --- Iniciando Sistema de Logistica ---");

 const meuVoo = new Voo(
   dadosSimulados[" id_voo "].trim(),
   dadosSimulados[" data_envio "].trim(),
   dadosSimulados[" pacotes "].map((pacote: any) => new Pacote(
     Number(pacote["peso "]),
     pacote[" descricao "].trim()
   )),
   new descricao(
     Number(dadosSimulados[" detalhes "]["altitude_max "]),
     dadosSimulados[" detalhes "]["sensores "].map((sensor: string) => sensor.trim())
   )
 );

 console.log("Voo instanciado:", meuVoo);
 } }

Main.executar();
 