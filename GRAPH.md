# Graph - Problems

## 1319. Number of Operations to Make Network Connected

We need at least n-1 cables to connect n computers. We need to convert the list of edges into an adjacency list.

### Approach

- To connect all n computers, at least n - 1 connections are required. If not, return -1.
- Build an undirected graph using the given connections.
- Use BFS to traverse the graph and count the number of connected components.
- Each BFS call marks all nodes in one component as visited.
- If there are k connected components, we need k - 1 extra connections to connect them all.
- Return noOfComponents - 1.

### Time & Space Complexity

- **Time Complexity:** O(V + E)
- **Space Complexity:** O(V + E)

### Solution

```javascript
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;
  let graph = [];
  for (let [u, v] of connections) {
    if (!graph[v]) graph[v] = [];
    if (!graph[u]) graph[u] = [];
    graph[v].push(u);
    graph[u].push(v);
  }
  let visited = new Array(n).fill(false);
  let noOfComponents = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      noOfComponents++;
      bfs(i, graph, visited);
    }
  }
  return noOfComponents - 1;
};

const bfs = (src, graph, visited) => {
  let q = [src];
  visited[src] = true;
  while (q.length) {
    let curr = q.shift();
    for (let neighbour of graph[curr] || []) {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        q.push(neighbour);
      }
    }
  }
};
```

---

## 787. Cheapest Flights Within K Stops

If we use Dijkstra's Algorithm, it won't give the answer, we need to modify a lot. If we travel level by level (stops), we do level order traversal only within K. This uses a modified BFS approach.

### Approach

- Build an adjacency list from the flights array where each city stores its neighbors and travel cost.
- Use a BFS-style queue that keeps track of (current city, total cost, number of stops).
- Maintain a minPrice array to store the cheapest cost found so far to reach each city.
- Start from the source city with cost 0 and 0 stops.
- While processing the queue:
  - Skip paths that exceed k stops.
  - For each neighbor, update the cost if a cheaper price is found and push it into the queue with increased stops.
  - Finally, return the minimum cost to reach dst; if unreachable within k stops, return -1.

### Time & Space Complexity

- **Time Complexity:** O(E × K)
- **Space Complexity:** O(N + E)

### Solution

```javascript
var findCheapestPrice = function (n, flights, src, dst, k) {
  let graph = Array.from({ length: n }, () => []);
  for (let [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  let minPrice = new Array(n).fill(Infinity);
  minPrice[src] = 0;

  // [city, cost, stops]
  let q = [[src, 0, 0]];
  while (q.length) {
    let [curr, currPrice, stops] = q.shift();
    if (stops > k) continue;
    for (let [neighbor, neighborPrice] of graph[curr]) {
      let newPrice = currPrice + neighborPrice;
      if (newPrice < minPrice[neighbor]) {
        minPrice[neighbor] = newPrice;
        q.push([neighbor, newPrice, stops + 1]);
      }
    }
  }
  return minPrice[dst] === Infinity ? -1 : minPrice[dst];
};
```

---

## 1976. Number of Ways to Arrive at Destination

This problem requires finding the number of shortest paths from node 0 to node n-1 in a weighted graph.

### Approach

- Build an adjacency list from the given roads.
- Use Dijkstra's algorithm to find the shortest distance from node 0 to all nodes.
- Along with distance (minW), maintain pathCount[i] = number of shortest paths to node i.
- Initialize:
  - minW[0] = 0, pathCount[0] = 1
  - Min-heap (priority queue) with [0, 0]
- For each extracted node:
  - If a shorter path to a neighbor is found, update its distance and copy the path count.
  - If an equal shortest path is found, add the path count (mod 10^9 + 7).
- Final answer is pathCount[n-1], the number of shortest paths to the destination.

### Time & Space Complexity

- **Time Complexity:** O((V + E) log V), where V = n (number of nodes), E = roads.length
- **Space Complexity:** O(V + E)

### Solution

```javascript
var countPaths = function (n, roads) {
  let graph = Array.from({ length: n }, () => []);
  for (let [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  console.log('graph', graph);

  let pq = new MinPriorityQueue((x) => x[0]);
  let minW = new Array(n).fill(Infinity);
  let pathCount = new Array(n).fill(0);

  pq.push([0, 0]);
  minW[0] = 0;
  pathCount[0] = 1;

  while (!pq.isEmpty()) {
    let [currW, curr] = pq.pop();

    for (let [neigh, neighW] of graph[curr]) {
      let newW = currW + neighW;
      if (newW < minW[neigh]) {
        minW[neigh] = newW;
        pathCount[neigh] = pathCount[curr];
        pq.push([newW, neigh]);
      } else if (newW === minW[neigh]) {
        pathCount[neigh] = (pathCount[curr] + pathCount[neigh]) % (1e9 + 7);
      }
    }
  }

  console.log('pathCount', pathCount);
  return pathCount[n - 1];
};
```

---

## 1584. Min Cost to Connect All Points
