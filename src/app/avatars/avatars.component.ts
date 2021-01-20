import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent implements OnInit {

  constructor() { }

  defaultSelectedCollection ='Animals';
  currentAvatar:string ='https://community.qlik.com/t5/image/serverpage/avatar-name/bear/avatar-theme/candy/avatar-collection/animals/avatar-display-size/message/version/2?xdesc=1.0';
  avatars:any=[];

  ngOnInit(): void {
    this.onSelectCollection(this.defaultSelectedCollection);
    this.currentAvatar = ''+localStorage.getItem('avatarImage');
  }

  collections:any = [
      { id: 'Animals',       name: 'Animals',     avatarsUrls:[ { imgsrc:'https://community.qlik.com/t5/image/serverpage/avatar-name/bear/avatar-theme/candy/avatar-collection/animals/avatar-display-size/message/version/2?xdesc=1.0',          title: 'bear'     },
                                                                { imgsrc:'https://community.qlik.com/t5/image/serverpage/avatar-name/bird/avatar-theme/candy/avatar-collection/animals/avatar-display-size/message/version/2?xdesc=1.0',          title: 'bird'     },
                                                  ]},
      { id: 'Architecture',  name: 'Architecture', avatarsUrls:[ { imgsrc:'https://community.qlik.com/t5/image/serverpage/avatar-name/bridge/avatar-theme/candy/avatar-collection/architecture/avatar-display-size/message/version/2?xdesc=1.0',  title: 'bridge'   },
                                                                 { imgsrc:'https://community.qlik.com/t5/image/serverpage/avatar-name/home/avatar-theme/candy/avatar-collection/architecture/avatar-display-size/message/version/2?xdesc=1.0',    title: 'home'     }
                                                  ]},
      { id: 'Food',          name: 'Food',         avatarsUrls:[{ imgsrc: 'https://community.qlik.com/t5/image/serverpage/avatar-name/asian/avatar-theme/candy/avatar-collection/food/avatar-display-size/message/version/2?xdesc=1.0',           title: 'asian'    },
                                                                { imgsrc: 'https://community.qlik.com/t5/image/serverpage/avatar-name/fruit/avatar-theme/candy/avatar-collection/food/avatar-display-size/message/version/2?xdesc=1.0',           title: 'fastfood' },
                                                  ]},
      { id: 'Hobbies',       name: 'Hobbies',      avatarsUrls:[ { imgsrc: 'https://community.qlik.com/t5/image/serverpage/avatar-name/bowling/avatar-theme/candy/avatar-collection/hobbies/avatar-display-size/message/version/2?xdesc=1.0',     title: 'bowling'  },
                                                                 { imgsrc: 'https://community.qlik.com/t5/image/serverpage/avatar-name/fishing/avatar-theme/candy/avatar-collection/hobbies/avatar-display-size/message/version/2?xdesc=1.0',     title: 'fishing'  }
                                                  ]}
  ];

    public onSelectCollection(avathar_id: any) {
       this.avatars = this.collections.find((item:any) => item.id == avathar_id).avatarsUrls;
       console.log(this.avatars)
     }

   selectAvatar(event:any) {
     event.preventDefault();
     localStorage.setItem('avatarImage',event.path[0].currentSrc);
     location.reload();
     this.currentAvatar = ''+localStorage.getItem('avatarImage');
   }
}
