import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  nodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
          {name: 'grandchild2.2.1'}
        ] }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];
}
