---
isDraft: false
title: "Leet"
sortOrder: 1
tags: ["LeetCode"]
publishDate: 2024-07-02
---

## Overview

```js
export async function getStaticPaths() {
  const blogEntries = await getCollection("blog");

  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore iusto quod ex dolorem aperiam vitae delectus laboriosam eum perspiciatis sit fugiat, cum quasi reiciendis excepturi quam nostrum adipisci ducimus minima illum ea debitis magni praesentium? Nulla dolorem odio minus quos, accusantium illo incidunt ad provident, numquam laboriosam, voluptatem neque quia! Unde incidunt nobis non in quo pariatur?

> Soluta perspiciatis explicabo, tenetur nobis laudantium praesentium, eveniet facere vero obcaecati labore, aliquam magni reprehenderit totam corrupti ipsam. Itaque fugiat perferendis id nostrum eius nihil tenetur, repellendus magni fugit repellat earum? Ad, iste eveniet. Dolores odit veritatis placeat officia nulla, cumque atque.

## Lorem ipsum dolor sit amet consectetur adipisicing elit.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore iusto quod ex dolorem aperiam vitae delectus laboriosam eum perspiciatis sit fugiat, cum quasi reiciendis excepturi quam nostrum adipisci ducimus minima illum ea debitis magni praesentium? Nulla dolorem odio minus quos, accusantium illo incidunt ad provident, numquam laboriosam, voluptatem neque quia! Unde incidunt nobis non in quo pariatur?

```go
import "fmt"

func main() {
  fmt.Println("Hello World")
}
```

Soluta perspiciatis explicabo, tenetur nobis laudantium praesentium, eveniet facere vero obcaecati labore, aliquam magni reprehenderit totam corrupti ipsam. Itaque fugiat perferendis id nostrum eius nihil tenetur, repellendus magni fugit repellat earum? Ad, iste eveniet. Dolores odit veritatis placeat officia nulla, cumque atque.

### Conclusion

Unde incidunt nobis non in quo pariatur? Soluta perspiciatis explicabo, tenetur nobis laudantium praesentium, eveniet facere vero obcaecati labore, aliquam magni reprehenderit totam corrupti ipsam. Itaque fugiat perferendis id nostrum eius nihil tenetur, repellendus magni fugit repellat earum? Ad, iste eveniet. Dolores odit veritatis placeat officia nulla, cumque atque.

## Lorem ipsum dolor sit amet consectetur adipisicing elit.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore iusto quod ex dolorem aperiam vitae delectus laboriosam eum perspiciatis sit fugiat, cum quasi reiciendis excepturi quam nostrum adipisci ducimus minima illum ea debitis magni praesentium? Nulla dolorem odio minus quos, accusantium illo incidunt ad provident, numquam laboriosam, voluptatem neque quia! Unde incidunt nobis non in quo pariatur?
