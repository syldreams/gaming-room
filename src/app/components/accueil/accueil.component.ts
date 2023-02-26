import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequetesService } from '../../services/requetes.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, OnDestroy {

  listeUtilisateurs: any [] = [];
  listeJeux: any [] = [];

  constructor(public requetesService: RequetesService){
  }

  ngOnInit(): void {
    this.requetesService.openWebSocket();

    this.requetesService.listeUtilisateurs.subscribe(
      (x: any[]) => {
        this.listeUtilisateurs = x;
        console.log("liste user", x);
      },
      (err: any) => console.error('Erreur requête liste utilisateurs: ' + err)
    );

    this.requetesService.listeJeux.subscribe(
      (x: any[]) => {
        this.listeJeux = x;
        console.log("liste jeux", x);
      },
      (err: any) => console.error('Erreur requête liste jeux: ' + err)
    );
  }

  ngOnDestroy(): void {
    this.requetesService.closeWebSocket();
  }

  sendMessage(sendForm: any){
    // const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    // this.requetesService.sendMessage(chatMessageDto);
    // sendForm.controls['message'].reset();
  }

}
