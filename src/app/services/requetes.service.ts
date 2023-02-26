import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { LISTE_JEUX, LISTE_UTILISATEURS } from '../constantes/temp';

const URL_BINANCE = 'wss://stream.binance.com:9443/ws/btceur@trade';

@Injectable({
  providedIn: 'root'
})
export class RequetesService {


  // Liste des utilisateurs
  private listeUtilisateursSource = new BehaviorSubject<any>(LISTE_UTILISATEURS);
  // Inscription comme Observable : si la source change, le paramètre local actuel change
  public listeUtilisateurs = this.listeUtilisateursSource.asObservable();

  // Liste des jeux
  public listeJeux = new BehaviorSubject<any>(LISTE_JEUX);
  // Inscription comme Observable : si la source change, le paramètre local actuel change
  //public listeJeux = this.listeUtilisateursSource.asObservable();

  webSocket: WebSocket = new WebSocket(URL_BINANCE);
  chatMessages: any[] = [];

  constructor() {

  }

  public openWebSocket(){
    this.webSocket = new WebSocket(URL_BINANCE);

    // this.webSocket.onopen = (event) => {
    //   console.log('Ouverture WS: ', event);
    // }

    // this.webSocket.onmessage = (event) => {
    //   //console.log("réception message", event.data);
    //   const chatMessageDto = JSON.parse(event.data);
    //   this.chatMessages.push(chatMessageDto);
    // }

    // this.webSocket.onclose = (event) => {
    //   console.log("Fermeture WS: ", event);
    // }
  }

  public sendMessage(chatMessageDto: any) {
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }

  public obtenirListeUtilisateurs() : Observable<any> {
    let subject: Subject<any> = new Subject<number>();

    subject.next(this.listeUtilisateurs);

    return subject;
  }

  // -- Fonctions pour changer la source --
  // Fonction pour mettre à jour la liste
  majListeUtilisateurs(listeUtilisateurs: any) {
    this.listeUtilisateursSource.next(listeUtilisateurs);
  }
  // Fonction pour mettre à jour la liste
  majListeJeux(listeJeux: any) {
    this.listeJeux.next(listeJeux);
  }
}
