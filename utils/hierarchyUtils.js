function hasCycle(graph, node, visited, recursionStack) {
    if (!visited[node]) {
      visited[node] = true;
      recursionStack[node] = true;
  
      const neighbors = graph[node];
  
      for (const neighbor of neighbors) {
        if (!visited[neighbor] && hasCycle(graph, neighbor, visited, recursionStack)) {
          return true;
        } else if (recursionStack[neighbor]) {
          return true;
        }
      }
    }
  
    recursionStack[node] = false;
    return false;
  }
  
export default hasCycle ;
  