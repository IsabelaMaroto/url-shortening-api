import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const apiBase = 'https://api.shrtco.de/v2/';
export interface teste {
  ok: boolean;
  result: {
    full_short_link: string;
    original_link: string;

  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  link = "";
  resposta: teste[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getAPi() {
    this.http.get<teste>(`${apiBase}shorten?url=${this.link}`).subscribe(teste => {
      this.resposta.push(teste)
      this.link = " ";
      console.log(this.resposta)
    })
  }
  botao(i: number) {
    const botao = document.getElementById(`botao${i}`)
    if (botao) {
      botao.innerText = 'Copied!'
    }
    botao?.classList.add('copied')

    let copyLink= document.getElementById(`link${i}`)?.innerHTML
    console.log(copyLink)
    copyLink ? navigator.clipboard.writeText(copyLink) : console.log('erro')


    }
  }
