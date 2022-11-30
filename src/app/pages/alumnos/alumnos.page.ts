import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { LogeosService } from 'src/app/services/logeos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  users:any[]=[];
  textoBuscar: string = '';
  

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getBddusus().subscribe(users =>{
      

      

      
      console.log("1"+users)
      this.users = users;
      console.log("2"+users)
    })
  }

  onSearchChange(event){
    //console.log(event.detail.value)

    this.textoBuscar=event.detail.value;
    console.log(this.textoBuscar)
    

  }

}