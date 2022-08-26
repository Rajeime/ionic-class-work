import { Component } from '@angular/core';
import { AlertController , LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username = '';
  password = '';
  studentType = '';
  procButtonMsg = '';
  roleMessage = '';
  firstName = '';
  lastName = '';

  constructor( 
        private alertController : AlertController ,
        private loadingController: LoadingController ) {}

  cancel(){
    this.username = '';
    this.password = '';
  }

  login(){
    console.log(`Username : ${this.username} - Password : ${this.password} - Student Type : ${this.studentType}`)
  }

  async alert1(){
    const alert = await this.alertController.create({
      header: 'My App - Alert',
      subHeader : 'Show Message',
      message : 'This is a message',
      buttons : ['Yes', 'No']
    });
    alert.present();
  }
  async alert5(param1, param2){
    const alert = await this.alertController.create({
      header: 'My App - Alert',
      subHeader : 'Show Message',
      message : `Is your name ${param1} - ${param2}`,
      buttons : ['Yes', 'No']
    });
    alert.present();
  }

  async alert4(){
    const alert = await this.alertController.create({
      header : 'My App - Alert',
      message : 'Enter your details',
      inputs : [
        {
          type : 'text',
          placeholder : 'First Name',
          name : 'fname'
        },
        {
          type : 'text',
          placeholder : 'Last Name',
          name : 'lname'
        }
      ],
      buttons : [
        {
          text : 'Submit',
          handler : (data)=>{
            this.firstName = data.fname,
            this.lastName = data.lname 
          }
        }
      ]
    });
    alert.present();
    const retVal = await alert.onDidDismiss();
    if(retVal){
      this.alert5(this.firstName, this.lastName);
    }
    // console.log(`${this.firstName} - ${this.lastName}`)
  }

  async alert2(){
    const alert = await this.alertController.create({
      header: 'My App - Alert',
      subHeader : 'Show Message',
      message : 'This is a message',
      buttons : [
        {
          text: 'Yes',
          role : 'confirm',
          handler : ()=>{
            this.procButtonMsg = 'Alert yes clicked';
          }
        },
        {
          text : 'No',
          role :'cancel',
          handler :()=>{
            this.procButtonMsg = 'Alert no clicked'
          }
        }
      ]
    });
    alert.present();
    // const retVal = await alert.onDidDismiss();
    // if(retVal)
    const {role} = await alert.onDidDismiss();
    this.roleMessage = `Current role ${role}`;
    console.log(this.procButtonMsg);
    console.log(this.roleMessage); 
  }

  async loading(){
      const load = await this.loadingController.create({
        message : 'Loading...',
        duration : 5000,
        spinner : 'lines'
      });
      load.present();
  }
}
