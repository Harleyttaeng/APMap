import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  aux_currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.currentItems = this.items.query();
    this.aux_currentItems = this.currentItems;
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Search for an item from the list of items.
   */
  getItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.aux_currentItems = this.currentItems.filter((item) => {
        return ((item.roomNumber + " " + item.roomName).indexOf(val) > -1);
      })
    } else {
      this.aux_currentItems = this.currentItems;
    }
  }

  highlightBlock(item, currentItems) {
    if (!(item.isClicked)) {
      document.getElementById(item.roomNumber).style.fill = "red";
      item.isClicked = true;
    } else {
      for (var i = 0; i < this.currentItems.length; i++) {
        if (currentItems[i].isClicked) {
          document.getElementById(currentItems[i].roomNumber).style.fill = "";
          currentItems[i].isClicked = false;
        }
      }
    }
  }

  // if (temp === item.roomNumber) {
  //   document.getElementById(temp).style.fill= "none";
  //   document.getElementById(item.roomNumber).style.fill = "red";
  // }
  // else {
  //   document.getElementById(item.roomNumber).style.fill= "red";
  //   temp = item.roomNumber;
}
