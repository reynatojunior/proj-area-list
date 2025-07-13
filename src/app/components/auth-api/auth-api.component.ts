import { Component } from '@angular/core';
import { ServAuthapiService } from '../../services/serv-authapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-api.component.html',
  styleUrl: './auth-api.component.css'
})
export class AuthApiComponent {
  posts: any[] = [];
  loading = true;
  error = false;

  constructor(private apiService: ServAuthapiService) {
    this.loadPosts();
  }

  loadPosts(): void {
    this.apiService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}