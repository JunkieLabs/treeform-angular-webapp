import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { Observable } from 'rxjs';
import { startWith ,  map } from 'rxjs/operators';
import { DialogModelProgress } from './model';

@Component({
    selector: 'dialog-progress',
    templateUrl: './dialog-progress.html',
    styleUrls: ['./dialog-progress.scss']
})
export class DialogProgress implements OnInit {

    _mTitle = "EUCA";


    constructor(
        public dialogRef: MatDialogRef<DialogProgress>,
        @Inject(MAT_DIALOG_DATA) public _mData: DialogModelProgress) {


    }

    ngOnInit(){

    }

    onClickCancel(){
        this.dialogRef.close();
    }

    onSubmit() {

        console.log('onSubmit');
        //let name = this._mFormGroup.get('name').value;
        //this.onClickCancel();
        
        this.dialogRef.close(this._mData);

    }


}