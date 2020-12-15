import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title: string;
  posts: any = {
    "msg": "there are 3 pages",
    "data": {
        "total": 8,
        "pages": 3,
        "posts": [
            {
                "id": 1,
                "title": "ASUU Strike",
                "body": "Asuu will call of the strike on january",
                "author": null,
                "isPublished": true,
                "createdAt": "2020-11-14T12:29:59.000Z",
                "updatedAt": "2020-12-08T10:19:59.000Z",
                "categoryId": 1,
                "userId": null,
                "category": {
                    "id": 1,
                    "name": "Politics",
                    "description": "to And fro of politics in Nigeria",
                    "createdAt": "2020-11-14T12:29:40.000Z",
                    "updatedAt": "2020-11-14T12:29:40.000Z"
                },
                "postImages": [
                    {
                        "id": 2,
                        "image": "public/uploads/1607422357181login.png",
                        "createdAt": "2020-12-08T10:12:37.000Z",
                        "updatedAt": "2020-12-08T10:12:37.000Z",
                        "postId": 1
                    },
                    {
                        "id": 3,
                        "image": "public/uploads/1607422357224Screenshot from 2020-10-28 10-28-11.png",
                        "createdAt": "2020-12-08T10:12:37.000Z",
                        "updatedAt": "2020-12-08T10:12:37.000Z",
                        "postId": 1
                    },
                    {
                        "id": 4,
                        "image": "public/uploads/1607422394031kazam_c7v6a6ae.movie.mp4",
                        "createdAt": "2020-12-08T10:13:14.000Z",
                        "updatedAt": "2020-12-08T10:13:14.000Z",
                        "postId": 1
                    }
                ],
                "comments": [
                    {
                        "id": 1,
                        "content": "Nice work",
                        "image": null,
                        "createdAt": "2020-11-16T14:34:16.000Z",
                        "updatedAt": "2020-11-16T14:34:16.000Z",
                        "userId": 1,
                        "postId": 1
                    },
                    {
                        "id": 2,
                        "content": null,
                        "image": null,
                        "createdAt": "2020-12-04T09:51:15.000Z",
                        "updatedAt": "2020-12-04T09:51:15.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 3,
                        "content": null,
                        "image": null,
                        "createdAt": "2020-12-04T09:51:51.000Z",
                        "updatedAt": "2020-12-04T09:51:51.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 4,
                        "content": null,
                        "image": "public/uploads/1607076266588backend intro2.jpg",
                        "createdAt": "2020-12-04T10:04:26.000Z",
                        "updatedAt": "2020-12-04T10:04:26.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 5,
                        "content": null,
                        "image": "public/uploads/1607076266592get.png",
                        "createdAt": "2020-12-04T10:04:26.000Z",
                        "updatedAt": "2020-12-04T10:04:26.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 7,
                        "content": null,
                        "image": "public/uploads/1607077198059backend intro2.jpg",
                        "createdAt": "2020-12-04T10:19:58.000Z",
                        "updatedAt": "2020-12-04T10:19:58.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 8,
                        "content": null,
                        "image": "public/uploads/1607077481656backend intro2.jpg",
                        "createdAt": "2020-12-04T10:24:41.000Z",
                        "updatedAt": "2020-12-04T10:24:41.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 9,
                        "content": null,
                        "image": "public/uploads/1607077666000backend intro2.jpg",
                        "createdAt": "2020-12-04T10:27:46.000Z",
                        "updatedAt": "2020-12-04T10:27:46.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 10,
                        "content": null,
                        "image": "public/uploads/1607078180361 k.png",
                        "createdAt": "2020-12-04T10:36:20.000Z",
                        "updatedAt": "2020-12-04T10:36:20.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 11,
                        "content": null,
                        "image": "public/uploads/1607080308917database.jpg",
                        "createdAt": "2020-12-04T11:11:48.000Z",
                        "updatedAt": "2020-12-04T11:11:48.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 12,
                        "content": null,
                        "image": "public/uploads/1607080508500database.jpg",
                        "createdAt": "2020-12-04T11:15:08.000Z",
                        "updatedAt": "2020-12-04T11:15:08.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 13,
                        "content": null,
                        "image": "public/uploads/1607080564359database.jpg",
                        "createdAt": "2020-12-04T11:16:04.000Z",
                        "updatedAt": "2020-12-04T11:16:04.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 14,
                        "content": null,
                        "image": "public/uploads/1607080646333database.jpg",
                        "createdAt": "2020-12-04T11:17:26.000Z",
                        "updatedAt": "2020-12-04T11:17:26.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 15,
                        "content": null,
                        "image": "public/uploads/1607080681071database.jpg",
                        "createdAt": "2020-12-04T11:18:01.000Z",
                        "updatedAt": "2020-12-04T11:18:01.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 16,
                        "content": "hello",
                        "image": "public/uploads/1607080763498database.jpg",
                        "createdAt": "2020-12-04T11:19:23.000Z",
                        "updatedAt": "2020-12-04T11:19:23.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 17,
                        "content": "hello",
                        "image": "no image yet",
                        "createdAt": "2020-12-04T11:26:30.000Z",
                        "updatedAt": "2020-12-04T11:26:30.000Z",
                        "userId": 3,
                        "postId": 1
                    },
                    {
                        "id": 18,
                        "content": "hello",
                        "image": "public/uploads/1607081211751database.jpg",
                        "createdAt": "2020-12-04T11:26:51.000Z",
                        "updatedAt": "2020-12-04T11:26:51.000Z",
                        "userId": 3,
                        "postId": 1
                    }
                ]
            },
            {
              "id": 1,
              "title": "ASUU Strike",
              "body": "Asuu will call of the strike on january",
              "author": null,
              "isPublished": true,
              "createdAt": "2020-11-14T12:29:59.000Z",
              "updatedAt": "2020-12-08T10:19:59.000Z",
              "categoryId": 1,
              "userId": null,
              "category": {
                  "id": 1,
                  "name": "Politics",
                  "description": "to And fro of politics in Nigeria",
                  "createdAt": "2020-11-14T12:29:40.000Z",
                  "updatedAt": "2020-11-14T12:29:40.000Z"
              },
              "postImages": [
                  {
                      "id": 2,
                      "image": "public/uploads/1607422357181login.png",
                      "createdAt": "2020-12-08T10:12:37.000Z",
                      "updatedAt": "2020-12-08T10:12:37.000Z",
                      "postId": 1
                  },
                  {
                      "id": 3,
                      "image": "public/uploads/1607422357224Screenshot from 2020-10-28 10-28-11.png",
                      "createdAt": "2020-12-08T10:12:37.000Z",
                      "updatedAt": "2020-12-08T10:12:37.000Z",
                      "postId": 1
                  },
                  {
                      "id": 4,
                      "image": "public/uploads/1607422394031kazam_c7v6a6ae.movie.mp4",
                      "createdAt": "2020-12-08T10:13:14.000Z",
                      "updatedAt": "2020-12-08T10:13:14.000Z",
                      "postId": 1
                  }
              ],
              "comments": [
                  {
                      "id": 1,
                      "content": "Nice work",
                      "image": null,
                      "createdAt": "2020-11-16T14:34:16.000Z",
                      "updatedAt": "2020-11-16T14:34:16.000Z",
                      "userId": 1,
                      "postId": 1
                  },
                  {
                      "id": 2,
                      "content": null,
                      "image": null,
                      "createdAt": "2020-12-04T09:51:15.000Z",
                      "updatedAt": "2020-12-04T09:51:15.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 3,
                      "content": null,
                      "image": null,
                      "createdAt": "2020-12-04T09:51:51.000Z",
                      "updatedAt": "2020-12-04T09:51:51.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 4,
                      "content": null,
                      "image": "public/uploads/1607076266588backend intro2.jpg",
                      "createdAt": "2020-12-04T10:04:26.000Z",
                      "updatedAt": "2020-12-04T10:04:26.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 5,
                      "content": null,
                      "image": "public/uploads/1607076266592get.png",
                      "createdAt": "2020-12-04T10:04:26.000Z",
                      "updatedAt": "2020-12-04T10:04:26.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 7,
                      "content": null,
                      "image": "public/uploads/1607077198059backend intro2.jpg",
                      "createdAt": "2020-12-04T10:19:58.000Z",
                      "updatedAt": "2020-12-04T10:19:58.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 8,
                      "content": null,
                      "image": "public/uploads/1607077481656backend intro2.jpg",
                      "createdAt": "2020-12-04T10:24:41.000Z",
                      "updatedAt": "2020-12-04T10:24:41.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 9,
                      "content": null,
                      "image": "public/uploads/1607077666000backend intro2.jpg",
                      "createdAt": "2020-12-04T10:27:46.000Z",
                      "updatedAt": "2020-12-04T10:27:46.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 10,
                      "content": null,
                      "image": "public/uploads/1607078180361 k.png",
                      "createdAt": "2020-12-04T10:36:20.000Z",
                      "updatedAt": "2020-12-04T10:36:20.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 11,
                      "content": null,
                      "image": "public/uploads/1607080308917database.jpg",
                      "createdAt": "2020-12-04T11:11:48.000Z",
                      "updatedAt": "2020-12-04T11:11:48.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 12,
                      "content": null,
                      "image": "public/uploads/1607080508500database.jpg",
                      "createdAt": "2020-12-04T11:15:08.000Z",
                      "updatedAt": "2020-12-04T11:15:08.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 13,
                      "content": null,
                      "image": "public/uploads/1607080564359database.jpg",
                      "createdAt": "2020-12-04T11:16:04.000Z",
                      "updatedAt": "2020-12-04T11:16:04.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 14,
                      "content": null,
                      "image": "public/uploads/1607080646333database.jpg",
                      "createdAt": "2020-12-04T11:17:26.000Z",
                      "updatedAt": "2020-12-04T11:17:26.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 15,
                      "content": null,
                      "image": "public/uploads/1607080681071database.jpg",
                      "createdAt": "2020-12-04T11:18:01.000Z",
                      "updatedAt": "2020-12-04T11:18:01.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 16,
                      "content": "hello",
                      "image": "public/uploads/1607080763498database.jpg",
                      "createdAt": "2020-12-04T11:19:23.000Z",
                      "updatedAt": "2020-12-04T11:19:23.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 17,
                      "content": "hello",
                      "image": "no image yet",
                      "createdAt": "2020-12-04T11:26:30.000Z",
                      "updatedAt": "2020-12-04T11:26:30.000Z",
                      "userId": 3,
                      "postId": 1
                  },
                  {
                      "id": 18,
                      "content": "hello",
                      "image": "public/uploads/1607081211751database.jpg",
                      "createdAt": "2020-12-04T11:26:51.000Z",
                      "updatedAt": "2020-12-04T11:26:51.000Z",
                      "userId": 3,
                      "postId": 1
                  }
              ]
          },
          {
            "id": 1,
            "title": "ASUU Strike",
            "body": "Asuu will call of the strike on january",
            "author": null,
            "isPublished": true,
            "createdAt": "2020-11-14T12:29:59.000Z",
            "updatedAt": "2020-12-08T10:19:59.000Z",
            "categoryId": 1,
            "userId": null,
            "category": {
                "id": 1,
                "name": "Politics",
                "description": "to And fro of politics in Nigeria",
                "createdAt": "2020-11-14T12:29:40.000Z",
                "updatedAt": "2020-11-14T12:29:40.000Z"
            },
            "postImages": [
                {
                    "id": 2,
                    "image": "public/uploads/1607422357181login.png",
                    "createdAt": "2020-12-08T10:12:37.000Z",
                    "updatedAt": "2020-12-08T10:12:37.000Z",
                    "postId": 1
                },
                {
                    "id": 3,
                    "image": "public/uploads/1607422357224Screenshot from 2020-10-28 10-28-11.png",
                    "createdAt": "2020-12-08T10:12:37.000Z",
                    "updatedAt": "2020-12-08T10:12:37.000Z",
                    "postId": 1
                },
                {
                    "id": 4,
                    "image": "public/uploads/1607422394031kazam_c7v6a6ae.movie.mp4",
                    "createdAt": "2020-12-08T10:13:14.000Z",
                    "updatedAt": "2020-12-08T10:13:14.000Z",
                    "postId": 1
                }
            ],
            "comments": [
                {
                    "id": 1,
                    "content": "Nice work",
                    "image": null,
                    "createdAt": "2020-11-16T14:34:16.000Z",
                    "updatedAt": "2020-11-16T14:34:16.000Z",
                    "userId": 1,
                    "postId": 1
                },
                {
                    "id": 2,
                    "content": null,
                    "image": null,
                    "createdAt": "2020-12-04T09:51:15.000Z",
                    "updatedAt": "2020-12-04T09:51:15.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 3,
                    "content": null,
                    "image": null,
                    "createdAt": "2020-12-04T09:51:51.000Z",
                    "updatedAt": "2020-12-04T09:51:51.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 4,
                    "content": null,
                    "image": "public/uploads/1607076266588backend intro2.jpg",
                    "createdAt": "2020-12-04T10:04:26.000Z",
                    "updatedAt": "2020-12-04T10:04:26.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 5,
                    "content": null,
                    "image": "public/uploads/1607076266592get.png",
                    "createdAt": "2020-12-04T10:04:26.000Z",
                    "updatedAt": "2020-12-04T10:04:26.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 7,
                    "content": null,
                    "image": "public/uploads/1607077198059backend intro2.jpg",
                    "createdAt": "2020-12-04T10:19:58.000Z",
                    "updatedAt": "2020-12-04T10:19:58.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 8,
                    "content": null,
                    "image": "public/uploads/1607077481656backend intro2.jpg",
                    "createdAt": "2020-12-04T10:24:41.000Z",
                    "updatedAt": "2020-12-04T10:24:41.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 9,
                    "content": null,
                    "image": "public/uploads/1607077666000backend intro2.jpg",
                    "createdAt": "2020-12-04T10:27:46.000Z",
                    "updatedAt": "2020-12-04T10:27:46.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 10,
                    "content": null,
                    "image": "public/uploads/1607078180361 k.png",
                    "createdAt": "2020-12-04T10:36:20.000Z",
                    "updatedAt": "2020-12-04T10:36:20.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 11,
                    "content": null,
                    "image": "public/uploads/1607080308917database.jpg",
                    "createdAt": "2020-12-04T11:11:48.000Z",
                    "updatedAt": "2020-12-04T11:11:48.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 12,
                    "content": null,
                    "image": "public/uploads/1607080508500database.jpg",
                    "createdAt": "2020-12-04T11:15:08.000Z",
                    "updatedAt": "2020-12-04T11:15:08.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 13,
                    "content": null,
                    "image": "public/uploads/1607080564359database.jpg",
                    "createdAt": "2020-12-04T11:16:04.000Z",
                    "updatedAt": "2020-12-04T11:16:04.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 14,
                    "content": null,
                    "image": "public/uploads/1607080646333database.jpg",
                    "createdAt": "2020-12-04T11:17:26.000Z",
                    "updatedAt": "2020-12-04T11:17:26.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 15,
                    "content": null,
                    "image": "public/uploads/1607080681071database.jpg",
                    "createdAt": "2020-12-04T11:18:01.000Z",
                    "updatedAt": "2020-12-04T11:18:01.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 16,
                    "content": "hello",
                    "image": "public/uploads/1607080763498database.jpg",
                    "createdAt": "2020-12-04T11:19:23.000Z",
                    "updatedAt": "2020-12-04T11:19:23.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 17,
                    "content": "hello",
                    "image": "no image yet",
                    "createdAt": "2020-12-04T11:26:30.000Z",
                    "updatedAt": "2020-12-04T11:26:30.000Z",
                    "userId": 3,
                    "postId": 1
                },
                {
                    "id": 18,
                    "content": "hello",
                    "image": "public/uploads/1607081211751database.jpg",
                    "createdAt": "2020-12-04T11:26:51.000Z",
                    "updatedAt": "2020-12-04T11:26:51.000Z",
                    "userId": 3,
                    "postId": 1
                }
            ]
        },
        {
          "id": 1,
          "title": "ASUU Strike",
          "body": "Asuu will call of the strike on january",
          "author": null,
          "isPublished": true,
          "createdAt": "2020-11-14T12:29:59.000Z",
          "updatedAt": "2020-12-08T10:19:59.000Z",
          "categoryId": 1,
          "userId": null,
          "category": {
              "id": 1,
              "name": "Politics",
              "description": "to And fro of politics in Nigeria",
              "createdAt": "2020-11-14T12:29:40.000Z",
              "updatedAt": "2020-11-14T12:29:40.000Z"
          },
          "postImages": [
              {
                  "id": 2,
                  "image": "public/uploads/1607422357181login.png",
                  "createdAt": "2020-12-08T10:12:37.000Z",
                  "updatedAt": "2020-12-08T10:12:37.000Z",
                  "postId": 1
              },
              {
                  "id": 3,
                  "image": "public/uploads/1607422357224Screenshot from 2020-10-28 10-28-11.png",
                  "createdAt": "2020-12-08T10:12:37.000Z",
                  "updatedAt": "2020-12-08T10:12:37.000Z",
                  "postId": 1
              },
              {
                  "id": 4,
                  "image": "public/uploads/1607422394031kazam_c7v6a6ae.movie.mp4",
                  "createdAt": "2020-12-08T10:13:14.000Z",
                  "updatedAt": "2020-12-08T10:13:14.000Z",
                  "postId": 1
              }
          ],
          "comments": [
              {
                  "id": 1,
                  "content": "Nice work",
                  "image": null,
                  "createdAt": "2020-11-16T14:34:16.000Z",
                  "updatedAt": "2020-11-16T14:34:16.000Z",
                  "userId": 1,
                  "postId": 1
              },
              {
                  "id": 2,
                  "content": null,
                  "image": null,
                  "createdAt": "2020-12-04T09:51:15.000Z",
                  "updatedAt": "2020-12-04T09:51:15.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 3,
                  "content": null,
                  "image": null,
                  "createdAt": "2020-12-04T09:51:51.000Z",
                  "updatedAt": "2020-12-04T09:51:51.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 4,
                  "content": null,
                  "image": "public/uploads/1607076266588backend intro2.jpg",
                  "createdAt": "2020-12-04T10:04:26.000Z",
                  "updatedAt": "2020-12-04T10:04:26.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 5,
                  "content": null,
                  "image": "public/uploads/1607076266592get.png",
                  "createdAt": "2020-12-04T10:04:26.000Z",
                  "updatedAt": "2020-12-04T10:04:26.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 7,
                  "content": null,
                  "image": "public/uploads/1607077198059backend intro2.jpg",
                  "createdAt": "2020-12-04T10:19:58.000Z",
                  "updatedAt": "2020-12-04T10:19:58.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 8,
                  "content": null,
                  "image": "public/uploads/1607077481656backend intro2.jpg",
                  "createdAt": "2020-12-04T10:24:41.000Z",
                  "updatedAt": "2020-12-04T10:24:41.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 9,
                  "content": null,
                  "image": "public/uploads/1607077666000backend intro2.jpg",
                  "createdAt": "2020-12-04T10:27:46.000Z",
                  "updatedAt": "2020-12-04T10:27:46.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 10,
                  "content": null,
                  "image": "public/uploads/1607078180361 k.png",
                  "createdAt": "2020-12-04T10:36:20.000Z",
                  "updatedAt": "2020-12-04T10:36:20.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 11,
                  "content": null,
                  "image": "public/uploads/1607080308917database.jpg",
                  "createdAt": "2020-12-04T11:11:48.000Z",
                  "updatedAt": "2020-12-04T11:11:48.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 12,
                  "content": null,
                  "image": "public/uploads/1607080508500database.jpg",
                  "createdAt": "2020-12-04T11:15:08.000Z",
                  "updatedAt": "2020-12-04T11:15:08.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 13,
                  "content": null,
                  "image": "public/uploads/1607080564359database.jpg",
                  "createdAt": "2020-12-04T11:16:04.000Z",
                  "updatedAt": "2020-12-04T11:16:04.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 14,
                  "content": null,
                  "image": "public/uploads/1607080646333database.jpg",
                  "createdAt": "2020-12-04T11:17:26.000Z",
                  "updatedAt": "2020-12-04T11:17:26.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 15,
                  "content": null,
                  "image": "public/uploads/1607080681071database.jpg",
                  "createdAt": "2020-12-04T11:18:01.000Z",
                  "updatedAt": "2020-12-04T11:18:01.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 16,
                  "content": "hello",
                  "image": "public/uploads/1607080763498database.jpg",
                  "createdAt": "2020-12-04T11:19:23.000Z",
                  "updatedAt": "2020-12-04T11:19:23.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 17,
                  "content": "hello",
                  "image": "no image yet",
                  "createdAt": "2020-12-04T11:26:30.000Z",
                  "updatedAt": "2020-12-04T11:26:30.000Z",
                  "userId": 3,
                  "postId": 1
              },
              {
                  "id": 18,
                  "content": "hello",
                  "image": "public/uploads/1607081211751database.jpg",
                  "createdAt": "2020-12-04T11:26:51.000Z",
                  "updatedAt": "2020-12-04T11:26:51.000Z",
                  "userId": 3,
                  "postId": 1
              }
          ]
      },
      {
        "id": 1,
        "title": "ASUU Strike",
        "body": "Asuu will call of the strike on january",
        "author": null,
        "isPublished": true,
        "createdAt": "2020-11-14T12:29:59.000Z",
        "updatedAt": "2020-12-08T10:19:59.000Z",
        "categoryId": 1,
        "userId": null,
        "category": {
            "id": 1,
            "name": "Politics",
            "description": "to And fro of politics in Nigeria",
            "createdAt": "2020-11-14T12:29:40.000Z",
            "updatedAt": "2020-11-14T12:29:40.000Z"
        },
        "postImages": [
            {
                "id": 2,
                "image": "public/uploads/1607422357181login.png",
                "createdAt": "2020-12-08T10:12:37.000Z",
                "updatedAt": "2020-12-08T10:12:37.000Z",
                "postId": 1
            },
            {
                "id": 3,
                "image": "public/uploads/1607422357224Screenshot from 2020-10-28 10-28-11.png",
                "createdAt": "2020-12-08T10:12:37.000Z",
                "updatedAt": "2020-12-08T10:12:37.000Z",
                "postId": 1
            },
            {
                "id": 4,
                "image": "public/uploads/1607422394031kazam_c7v6a6ae.movie.mp4",
                "createdAt": "2020-12-08T10:13:14.000Z",
                "updatedAt": "2020-12-08T10:13:14.000Z",
                "postId": 1
            }
        ],
        "comments": [
            {
                "id": 1,
                "content": "Nice work",
                "image": null,
                "createdAt": "2020-11-16T14:34:16.000Z",
                "updatedAt": "2020-11-16T14:34:16.000Z",
                "userId": 1,
                "postId": 1
            },
            {
                "id": 2,
                "content": null,
                "image": null,
                "createdAt": "2020-12-04T09:51:15.000Z",
                "updatedAt": "2020-12-04T09:51:15.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 3,
                "content": null,
                "image": null,
                "createdAt": "2020-12-04T09:51:51.000Z",
                "updatedAt": "2020-12-04T09:51:51.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 4,
                "content": null,
                "image": "public/uploads/1607076266588backend intro2.jpg",
                "createdAt": "2020-12-04T10:04:26.000Z",
                "updatedAt": "2020-12-04T10:04:26.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 5,
                "content": null,
                "image": "public/uploads/1607076266592get.png",
                "createdAt": "2020-12-04T10:04:26.000Z",
                "updatedAt": "2020-12-04T10:04:26.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 7,
                "content": null,
                "image": "public/uploads/1607077198059backend intro2.jpg",
                "createdAt": "2020-12-04T10:19:58.000Z",
                "updatedAt": "2020-12-04T10:19:58.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 8,
                "content": null,
                "image": "public/uploads/1607077481656backend intro2.jpg",
                "createdAt": "2020-12-04T10:24:41.000Z",
                "updatedAt": "2020-12-04T10:24:41.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 9,
                "content": null,
                "image": "public/uploads/1607077666000backend intro2.jpg",
                "createdAt": "2020-12-04T10:27:46.000Z",
                "updatedAt": "2020-12-04T10:27:46.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 10,
                "content": null,
                "image": "public/uploads/1607078180361 k.png",
                "createdAt": "2020-12-04T10:36:20.000Z",
                "updatedAt": "2020-12-04T10:36:20.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 11,
                "content": null,
                "image": "public/uploads/1607080308917database.jpg",
                "createdAt": "2020-12-04T11:11:48.000Z",
                "updatedAt": "2020-12-04T11:11:48.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 12,
                "content": null,
                "image": "public/uploads/1607080508500database.jpg",
                "createdAt": "2020-12-04T11:15:08.000Z",
                "updatedAt": "2020-12-04T11:15:08.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 13,
                "content": null,
                "image": "public/uploads/1607080564359database.jpg",
                "createdAt": "2020-12-04T11:16:04.000Z",
                "updatedAt": "2020-12-04T11:16:04.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 14,
                "content": null,
                "image": "public/uploads/1607080646333database.jpg",
                "createdAt": "2020-12-04T11:17:26.000Z",
                "updatedAt": "2020-12-04T11:17:26.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 15,
                "content": null,
                "image": "public/uploads/1607080681071database.jpg",
                "createdAt": "2020-12-04T11:18:01.000Z",
                "updatedAt": "2020-12-04T11:18:01.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 16,
                "content": "hello",
                "image": "public/uploads/1607080763498database.jpg",
                "createdAt": "2020-12-04T11:19:23.000Z",
                "updatedAt": "2020-12-04T11:19:23.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 17,
                "content": "hello",
                "image": "no image yet",
                "createdAt": "2020-12-04T11:26:30.000Z",
                "updatedAt": "2020-12-04T11:26:30.000Z",
                "userId": 3,
                "postId": 1
            },
            {
                "id": 18,
                "content": "hello",
                "image": "public/uploads/1607081211751database.jpg",
                "createdAt": "2020-12-04T11:26:51.000Z",
                "updatedAt": "2020-12-04T11:26:51.000Z",
                "userId": 3,
                "postId": 1
            }
        ]
    },
    {
      "id": 1,
      "title": "ASUU Strike",
      "body": "Asuu will call of the strike on january",
      "author": null,
      "isPublished": true,
      "createdAt": "2020-11-14T12:29:59.000Z",
      "updatedAt": "2020-12-08T10:19:59.000Z",
      "categoryId": 1,
      "userId": null,
      "category": {
          "id": 1,
          "name": "Politics",
          "description": "to And fro of politics in Nigeria",
          "createdAt": "2020-11-14T12:29:40.000Z",
          "updatedAt": "2020-11-14T12:29:40.000Z"
      },
      "postImages": [
          {
              "id": 2,
              "image": "public/uploads/1607422357181login.png",
              "createdAt": "2020-12-08T10:12:37.000Z",
              "updatedAt": "2020-12-08T10:12:37.000Z",
              "postId": 1
          },
          {
              "id": 3,
              "image": "public/uploads/1607422357224Screenshot from 2020-10-28 10-28-11.png",
              "createdAt": "2020-12-08T10:12:37.000Z",
              "updatedAt": "2020-12-08T10:12:37.000Z",
              "postId": 1
          },
          {
              "id": 4,
              "image": "public/uploads/1607422394031kazam_c7v6a6ae.movie.mp4",
              "createdAt": "2020-12-08T10:13:14.000Z",
              "updatedAt": "2020-12-08T10:13:14.000Z",
              "postId": 1
          }
      ],
      "comments": [
          {
              "id": 1,
              "content": "Nice work",
              "image": null,
              "createdAt": "2020-11-16T14:34:16.000Z",
              "updatedAt": "2020-11-16T14:34:16.000Z",
              "userId": 1,
              "postId": 1
          },
          {
              "id": 2,
              "content": null,
              "image": null,
              "createdAt": "2020-12-04T09:51:15.000Z",
              "updatedAt": "2020-12-04T09:51:15.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 3,
              "content": null,
              "image": null,
              "createdAt": "2020-12-04T09:51:51.000Z",
              "updatedAt": "2020-12-04T09:51:51.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 4,
              "content": null,
              "image": "public/uploads/1607076266588backend intro2.jpg",
              "createdAt": "2020-12-04T10:04:26.000Z",
              "updatedAt": "2020-12-04T10:04:26.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 5,
              "content": null,
              "image": "public/uploads/1607076266592get.png",
              "createdAt": "2020-12-04T10:04:26.000Z",
              "updatedAt": "2020-12-04T10:04:26.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 7,
              "content": null,
              "image": "public/uploads/1607077198059backend intro2.jpg",
              "createdAt": "2020-12-04T10:19:58.000Z",
              "updatedAt": "2020-12-04T10:19:58.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 8,
              "content": null,
              "image": "public/uploads/1607077481656backend intro2.jpg",
              "createdAt": "2020-12-04T10:24:41.000Z",
              "updatedAt": "2020-12-04T10:24:41.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 9,
              "content": null,
              "image": "public/uploads/1607077666000backend intro2.jpg",
              "createdAt": "2020-12-04T10:27:46.000Z",
              "updatedAt": "2020-12-04T10:27:46.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 10,
              "content": null,
              "image": "public/uploads/1607078180361 k.png",
              "createdAt": "2020-12-04T10:36:20.000Z",
              "updatedAt": "2020-12-04T10:36:20.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 11,
              "content": null,
              "image": "public/uploads/1607080308917database.jpg",
              "createdAt": "2020-12-04T11:11:48.000Z",
              "updatedAt": "2020-12-04T11:11:48.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 12,
              "content": null,
              "image": "public/uploads/1607080508500database.jpg",
              "createdAt": "2020-12-04T11:15:08.000Z",
              "updatedAt": "2020-12-04T11:15:08.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 13,
              "content": null,
              "image": "public/uploads/1607080564359database.jpg",
              "createdAt": "2020-12-04T11:16:04.000Z",
              "updatedAt": "2020-12-04T11:16:04.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 14,
              "content": null,
              "image": "public/uploads/1607080646333database.jpg",
              "createdAt": "2020-12-04T11:17:26.000Z",
              "updatedAt": "2020-12-04T11:17:26.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 15,
              "content": null,
              "image": "public/uploads/1607080681071database.jpg",
              "createdAt": "2020-12-04T11:18:01.000Z",
              "updatedAt": "2020-12-04T11:18:01.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 16,
              "content": "hello",
              "image": "public/uploads/1607080763498database.jpg",
              "createdAt": "2020-12-04T11:19:23.000Z",
              "updatedAt": "2020-12-04T11:19:23.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 17,
              "content": "hello",
              "image": "no image yet",
              "createdAt": "2020-12-04T11:26:30.000Z",
              "updatedAt": "2020-12-04T11:26:30.000Z",
              "userId": 3,
              "postId": 1
          },
          {
              "id": 18,
              "content": "hello",
              "image": "public/uploads/1607081211751database.jpg",
              "createdAt": "2020-12-04T11:26:51.000Z",
              "updatedAt": "2020-12-04T11:26:51.000Z",
              "userId": 3,
              "postId": 1
          }
      ]
  },
            // {
            //     "id": 7,
            //     "title": "END SARS",
            //     "body": "Nigerian youths are taken action.",
            //     "author": null,
            //     "isPublished": true,
            //     "createdAt": "2020-12-04T14:53:03.000Z",
            //     "updatedAt": "2020-12-04T14:58:28.000Z",
            //     "categoryId": 2,
            //     "userId": null,
            //     "category": {
            //         "id": 2,
            //         "name": "Sports",
            //         "description": "to And fro of sports in the world",
            //         "createdAt": "2020-12-03T15:11:41.000Z",
            //         "updatedAt": "2020-12-03T15:11:41.000Z"
            //     },
            //     "postImages": [],
            //     "comments": []
            // },
            // {
            //     "id": 9,
            //     "title": "Manchester united beaten by PSG",
            //     "body": "the red devils ",
            //     "author": null,
            //     "isPublished": true,
            //     "createdAt": "2020-12-04T14:54:02.000Z",
            //     "updatedAt": "2020-12-04T14:54:02.000Z",
            //     "categoryId": 2,
            //     "userId": null,
            //     "category": {
            //         "id": 2,
            //         "name": "Sports",
            //         "description": "to And fro of sports in the world",
            //         "createdAt": "2020-12-03T15:11:41.000Z",
            //         "updatedAt": "2020-12-03T15:11:41.000Z"
            //     },
            //     "postImages": [],
            //     "comments": []
            // }
        ]
    }
};
  post1: string;
  post2: string;
  post3: string;
  post4: string;
  post5: string;
  post6: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'PM Abiy meets AU envoys for talks on Ethiopia conflict';
    this.post1 = 'LASG raises alarm over serial manhole vandalisms',
      
    this.post2 = '3 in police net for allegedly stealing 3-day-old child in Kaduna';
    this.post3 = 'Erdogan’s son-in-law leaves sovereign wealth fund';
    this.post4 = 'Nigeria’s COVID- 19 death hits 1171, with 246 new cases - NCDC';
    this.post5 = 'Military air strikes knock out more terrorists’ hideout in Borno';
    this.post6 = 'Buhari to roll out a';
  }


}
