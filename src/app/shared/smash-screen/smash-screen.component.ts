import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'smash-smash-screen',
  templateUrl: './smash-screen.component.html',
  styleUrls: ['./smash-screen.component.scss']
})
export class SmashScreenComponent implements OnInit {

videoList = [
     {name: 'Fox News',
        id: '1',
        embed: 'qUAKS1Cgiew'
        },
     { name: 'Item-2',
        id:  '2',
        embed: ''
        },
        { name:  'Item-3',
        id:  '3',
        embed: ''
        }];

    constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() { 
  }
    getEmbedURL(){
    
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoList[0].embed +'?autoplay=1'); 
    }

}
