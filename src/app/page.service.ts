import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private pages = [
    // { title: 'Sukhakarta Dukhaharta', pageId: 'ganapati-aarti', icon: 'ganapati' },
    // { title: 'Sashtanga Naman He Majhe', pageId: 'ganapati-stotra', icon: 'ganapati' },
    // { title: 'Om Namaste Ganapataye', pageId: 'ganapati-atharvasheersha', icon: 'ganapati' },

    // { title: 'Jay Jay Sacchit Swarupa', pageId: 'gajanan-maharaj-aarti-1', icon: 'gajanan-maharaj' },
    // { title: 'Shrimad Sadguru Swami', pageId: 'gajanan-maharaj-aarti-2', icon: 'gajanan-maharaj' },
    // { title: 'Dhanya Dhanya Ho Pradakshina', pageId: 'guru-dhawa', icon: 'gajanan-maharaj' },

    // { title: 'Trigunatmak Traymurti', pageId: 'dutta-aarti', icon: 'dutta' },

    // { title: 'Yuge Atthaveesa Witewari Ubha', pageId: 'vitthal-aarti', icon: 'vitthal' },

    // { title: 'Lavlavthi Vikrala', pageId: 'shankar-aarti', icon: 'shankar' },

    // { title: 'Aarti Sai Baba', pageId: 'sai-baba-aarti', icon: 'sai-baba' },

    // { title: 'Durge Durghat Bhari', pageId: 'renuka-aarti-1', icon: 'renuka' },
    // { title: 'Hi Aadimaaya Jagadamba', pageId: 'renuka-aarti-2', icon: 'renuka' },
    // { title: 'Jay Jay Bhavani', pageId: 'renuka-aarti-3', icon: 'renuka' },
    // { title: 'Lakshya Koti Chanda Kirna', pageId: 'renuka-ashtak-1', icon: 'renuka' },
    // { title: 'Jay Jay Vishwapate', pageId: 'renuka-ashtak-2', icon: 'renuka' },
    // { title: 'Sada Sarvada Morya Sharada Hi', pageId: 'renuka-ashtak-3', icon: 'renuka' },
    // { title: 'Majhi Renuka Mauli', pageId: 'renuka-abhanga', icon: 'renuka' },
    // { title: 'Mahur Gadhavari Ga', pageId: 'renuka-jogava', icon: 'renuka' },
    // { title: 'Aamhi Chuklo Jari Tari Kaahi', pageId: 'renuka-pada', icon: 'renuka' },
    // { title: 'Ambe Ek Kari', pageId: 'renuka-prarthana', icon: 'renuka' },

    { title: 'Mahalaxmi Aarti', pageId: 'mahalaxmi-aarti', icon: 'laxmi' },

    { title: 'Om Jay Jagdish Hare', pageId: 'vishnu-aarti', icon: 'vishnu' },

    { title: 'Dhav Re Ram Raya', pageId: 'ram-dhawa', icon: 'ram' },
  ];

  constructor() { }

  getPages() {
    return this.pages;
  }

  getIconpageId(pageId: string) {
    return "../assets/icons/godly-icons/" + pageId + ".png"
  }

  getPage(pageId: string) {
    var page = this.pages.filter(page => {
      return page.pageId == pageId
    })
    return page[0];
  }
}
