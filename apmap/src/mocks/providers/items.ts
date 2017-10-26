import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "roomNumber": "10.08",
        "roomName": "Mediterranean",
        "seats": "13",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.11",
        "roomName": "Coral",
        "seats": "24",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.12",
        "roomName": "Solomon",
        "seats": "30",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.13",
        "roomName": "Tasman",
        "seats": "130",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.14",
        "roomName": "Caribbean",
        "seats": "12",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.15",
        "roomName": "Aegean",
        "seats": "12",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.16",
        "roomName": "Sargasso",
        "seats": "12",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.17",
        "roomName": "Caspian",
        "seats": "12",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.19",
        "roomName": "Silicon Valley",
        "seats": "22",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.20",
        "roomName": "Bass Strait",
        "seats": "8",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.21",
        "roomName": "Java",
        "seats": "8",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.27",
        "roomName": "Oxford",
        "seats": "28",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.28",
        "roomName": "Yale",
        "seats": "24",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.29",
        "roomName": "Sorbonne",
        "seats": "24",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.30",
        "roomName": "Princeton",
        "seats": "8",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.31",
        "roomName": "Salamanca",
        "seats": "8",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.32",
        "roomName": "Cambridge",
        "seats": "28",
        "projector": true,
        "tv": true,
        "whiteboard": true
      },
      {
        "roomNumber": "10.33",
        "roomName": "Monash",
        "seats": "30",
        "projector": true,
        "tv": true,
        "whiteboard": true
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
