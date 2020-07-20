import { Component, OnInit } from '@angular/core';



interface adher {
  id?: number;
  Matricule:string;
  montant: string;
  nombre_mois: number;
}

const Adh: adher[] = [
  {
    Matricule: '007',
    montant:'1455',
    nombre_mois: 4,
  },
  {
    Matricule: '007',
    montant:'1455',
    nombre_mois: 4,
  },
  {
    Matricule: '007',
    montant:'1455',
    nombre_mois: 4,
  },
  {
    Matricule: '007',
    montant:'1455',
    nombre_mois: 4,
  },
];
@Component({
  selector: 'app-etat-adherant',
  templateUrl: './etat-adherant.component.html',
  styleUrls: ['./etat-adherant.component.css']
})
export class EtatAdherantComponent implements OnInit {


  page = 1;
  pageSize = 4;
  collectionSize = Adh.length;
  adhe: adher[];

  constructor() {
    this.refreshAdher();
  }

  refreshAdher() {
    this.adhe = Adh
      .map((adher, i) => ({id: i + 1, ...adher}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  ngOnInit(): void {
  }

}
