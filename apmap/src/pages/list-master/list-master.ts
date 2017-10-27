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
  currentItem: Item;

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
    if (this.currentItem) {
      this.highlightBlock(this.currentItem, this.currentItems);
    }
  }

  highlightBlock(item, currentItems) {
    if (!(item.isClicked)) {
      document.getElementById(item.roomNumber).style.fill = "red";
      item.isClicked = true;
      this.currentItem = item;
    } else {
      document.getElementById(item.roomNumber).style.fill = "";
      item.isClicked = false;
      this.currentItem = null;
    }
    for (var i = 0; i < this.aux_currentItems.length; i++) {
      if (item.roomNumber === currentItems[i].roomNumber) {
        console.log("Skipping...");
      } else {
        document.getElementById(currentItems[i].roomNumber).style.fill = "";
        try {
          document.getElementById(currentItems[i].roomNumber + "details").removeAttribute("open");
        } catch (e) {
          // lol hacking my way through downtown
        }
        currentItems[i].isClicked = false;
      }
    }
    
  }

}
