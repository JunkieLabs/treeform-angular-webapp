import { Component, OnInit, ViewChild, ElementRef, Inject, NgZone, HostListener } from '@angular/core';
import { MatVideoComponent } from 'mat-video/lib/video.component';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  mIsRunning = false;
  mIsLoaded = false;

  _mVideoSrc: string = 'assets/video/treeform_home.mp4';
  _mPosterSrc: string = 'assets/img/video.png';

  ngclass = "mat-video-responsive";

  @ViewChild('video') matVideo: MatVideoComponent;
  videoPlayer: HTMLVideoElement;

  constructor(
    public el: ElementRef,
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.videoPlayer = this.matVideo.getVideoTag();
    this.onPlayerReady()
  }

  onPlayerReady() {
      this.videoPlayer.addEventListener('loadedmetadata',() => {
        this.mIsLoaded = true
      })

      this.videoPlayer.addEventListener('play', ()=>{
        this.mIsRunning = true
      })

      this.videoPlayer.addEventListener('pause', ()=>{
        let time = new Date().valueOf();
        this.mIsRunning = false
      })
  }


  _onPlayClick(){
    this.playVideo()
  }

  playVideo() {
    console.log('playyyy');

    this.videoPlayer.play()
  }

  stopVideo() {
    console.log('pauseeee');

    this.videoPlayer.pause();
  }

}
