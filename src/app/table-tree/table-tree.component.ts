import { DataSource, CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, merge, map } from 'rxjs';


/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false,
  ) {}
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
@Injectable({providedIn: 'root'})
export class DynamicDatabase {
  // dummyDataMap = [
  //   {
  //     id: '0001',
  //     type: 'donut',
  //     name: 'Cake',
  //     ppu: 0.55,
  //     topping: [
  //       { id: '5001', type: 'None' },
  //       { id: '5002', type: 'Glazed' },
  //       { id: '5005', type: 'Sugar' },
  //       { id: '5007', type: 'Powdered Sugar' },
  //       { id: '5006', type: 'Chocolate with Sprinkles' },
  //       { id: '5003', type: 'Chocolate' },
  //       { id: '5004', type: 'Maple' },
  //     ],
  //   },
  //   {
  //     id: '0002',
  //     type: 'donut',
  //     name: 'Raised',
  //     ppu: 0.55,
  //     topping: [
  //       { id: '5001', type: 'None' },
  //       { id: '5002', type: 'Glazed' },
  //       { id: '5005', type: 'Sugar' },
  //       { id: '5003', type: 'Chocolate' },
  //       { id: '5004', type: 'Maple' },
  //     ],
  //   },
  //   {
  //     id: '0003',
  //     type: 'donut',
  //     name: 'Old Fashioned',
  //     ppu: 0.55,
  //     topping: [
  //       { id: '5001', type: 'None' },
  //       { id: '5002', type: 'Glazed' },
  //       { id: '5003', type: 'Chocolate' },
  //       { id: '5004', type: 'Maple' },
  //     ],
  //   },
  // ];

  // dataMap = new Map<string, string[]>(
  //   [
  //     ['Fruits', ['Apple', 'Orange', 'Banana']],
  //     ['Vegetables', ['Tomato', 'Potato', 'Onion']],
  //     ['Apple', ['Fuji', 'Macintosh']],
  //     ['Onion', ['Yellow', 'White', 'Purple']],
  //   ]
  //  );
  // sampleMap: Map<object,object[]> = new Map<object,object[]>();
  // rootSample:any[] = [];
  // dummyDataSetup(){
  //   this.dummyDataMap.forEach((data)=>{
  //     let child: any[] =[];
  //     data.topping.forEach((topping)=>{
  //       child.push(topping.type)
  //     })
  //     // continue
  //     this.rootSample.push(data.name)
  //     this.sampleMap.set(data.name,child)
  //   })
  //   console.log(this.sampleMap)
  // }
  // rootLevelNodes: string[] = this.rootSample;


  // initialData(): DynamicFlatNode[] {
  //   this.dummyDataSetup();
  //   return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  // }

  // getChildren(node: string): string[] | undefined {
  //   return this.sampleMap.get(node);
  // }

  // isExpandable(node: string): boolean {
  //   return this.sampleMap.has(node);
  // }
}


// export class DynamicDataSource implements DataSource<DynamicFlatNode> {
  // dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  // get data(): DynamicFlatNode[] {
  //   return this.dataChange.value;
  // }
  // set data(value: DynamicFlatNode[]) {
  //   this._treeControl.dataNodes = value;
  //   this.dataChange.next(value);
  // }

  // constructor(
  //   private _treeControl: FlatTreeControl<DynamicFlatNode>,
  //   private _database: DynamicDatabase,
  // ) {}

  // connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
  //   this._treeControl.expansionModel.changed.subscribe(change => {
  //     if (
  //       (change as SelectionChange<DynamicFlatNode>).added ||
  //       (change as SelectionChange<DynamicFlatNode>).removed
  //     ) {
  //       this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
  //     }
  //   });

  //   return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  // }

  // disconnect(collectionViewer: CollectionViewer): void {}

  // handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
  //   if (change.added) {
  //     change.added.forEach(node => this.toggleNode(node, true));
  //   }
  //   if (change.removed) {
  //     change.removed
  //       .slice()
  //       .reverse()
  //       .forEach(node => this.toggleNode(node, false));
  //   }
  // }

  // toggleNode(node: DynamicFlatNode, expand: boolean) {
  //   const children = this._database.getChildren(node.item);
  //   const index = this.data.indexOf(node);
  //   if (!children || index < 0) {
  //     return;
  //   }

  //   node.isLoading = true;

  //   if (expand) {
  //     const nodes = children.map(
  //       name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)),
  //     );
  //     this.data.splice(index + 1, 0, ...nodes);
  //   } else {
  //     let count = 0;
  //     for (
  //       let i = index + 1;
  //       i < this.data.length && this.data[i].level > node.level;
  //       i++, count++
  //     ) {}
  //     this.data.splice(index + 1, count);
  //   }

  //   this.dataChange.next(this.data);
  //   node.isLoading = false;
   
  // }
// }


@Component({
  selector: 'app-table-tree',
  templateUrl: './table-tree.component.html',
  styleUrls: ['./table-tree.component.css']
})
export class TableTreeComponent implements OnInit {
  // constructor(database: DynamicDatabase) {
  //   this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
  //   this.dataSource = new DynamicDataSource(this.treeControl, database);

  //   this.dataSource.data = database.initialData();
  // }

  dummyDataMap: any[] = [
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      ppu: 0.55,
      topping: [
        { id: '5001', type: 'None' },
        { id: '5002', type: 'Glazed' },
        { id: '5005', type: 'Sugar' },
        { id: '5007', type: 'Powdered Sugar' },
        { id: '5006', type: 'Chocolate with Sprinkles' },
        { id: '5003', type: 'Chocolate' },
        { id: '5004', type: 'Maple' },
      ],
    },
    {
      id: '0002',
      type: 'donut',
      name: 'Raised',
      ppu: 0.55,
      topping: [
        { id: '5001', type: 'None' },
        { id: '5002', type: 'Glazed' },
        { id: '5005', type: 'Sugar' },
        { id: '5003', type: 'Chocolate' },
        { id: '5004', type: 'Maple' },
      ],
    },
    {
      id: '0003',
      type: 'donut',
      name: 'Old Fashioned',
      ppu: 0.55,
      topping: [
        { id: '5001', type: 'None' },
        { id: '5002', type: 'Glazed' },
        { id: '5003', type: 'Chocolate' },
        { id: '5004', type: 'Maple' },
      ],
    },
  ];

  constructor(){}
  ngOnInit(): void {
    this.dummyDataMap = this.dummyDataMap.map((data)=>({
      ...data,
      'expanded': false
    }))
  }

  toggle(expanded:any) {
    expanded = !expanded;
  }
}
