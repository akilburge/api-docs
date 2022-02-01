"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[4752],{4179:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2018/06/30/tls-deprecation-notice","metadata":{"permalink":"/viagogo-api-docs/blog/2018/06/30/tls-deprecation-notice","editUrl":"https://github.com/viagogo/viagogo-api-docs/tree/main/blog/2018-06-30-tls-deprecation-notice.md","source":"@site/blog/2018-06-30-tls-deprecation-notice.md","title":"TLS v1.0 Deprecation Notice","description":"viagogo will be disabling support for TLS v1.0 on our public facing api. We are providing advanced notice so that our customers and partners can prepare accordingly. If you are using unsupported clients to connect to the viagogo API after disabling TLS v1.0, you will begin receiving connection error messages.","date":"2018-06-30T00:00:00.000Z","formattedDate":"June 30, 2018","tags":[{"label":"tls","permalink":"/viagogo-api-docs/blog/tags/tls"},{"label":"deprecation","permalink":"/viagogo-api-docs/blog/tags/deprecation"},{"label":"breaking-change","permalink":"/viagogo-api-docs/blog/tags/breaking-change"}],"readingTime":1.65,"truncated":false,"authors":[{"name":"viagogo","title":"The World\u2019s Largest Ticket Marketplace","url":"https://viagogo.com","imageURL":"https://github.com/viagogo.png","key":"viagogo"}]},"content":"viagogo will be disabling support for TLS v1.0 on our public facing api. We are providing advanced notice so that our customers and partners can prepare accordingly. If you are using unsupported clients to connect to the viagogo API after disabling TLS v1.0, you will begin receiving connection error messages.\\n\\n:::warning\\n\\n**Possible breaking change**\\nThis change is a possible breaking change to clients that connect to our API using Tls1.0.\\n\\n:::\\n\\n## Why are we disabling TLS v1.0?\\n\\nWe are disabling TLS v1.0 to ensure that viagogo software is providing our customers and partners with safe and secure protocols for our connections. This change is enforced throughout the industry to maintain secure connections that encrypt and protect your sensitive data from malicious breaches. The PCI Security Standards Council updated their guidance and will now require full deprecation of TLS 1.0  for applications that process payments. Although, we only support payments on the viagogo website application, we will be following the recommendation across all our inbound connections.\\n\\n## Am I affected?\\n\\nCustomers that have custom clients and are using clients that do not support TLS v1.1 and above will no longer be able to successfully connect to our public API.\\n\\nCustomer should ensure that they are using a supported client or else it will lead to downtime of any internal processes that utilize the viagogo API.\\n\\nviagogo will be performing analysis of connections to our public API and performing proactive communications to affected customer to ensure a smooth transition.  We still recommend that our customers do not rely solely on us to reach out to them, each customer that utilizes these APIs should ensure that they are prepared for the deprecation date.\\n\\nYou can use the following API to easily test the library you are using for API connections to viagogo to ensure it supports TLS v1.1 or greater.\\n\\n[https://www.howsmyssl.com/a/check](https://www.howsmyssl.com/a/check)\\n\\nThe HTTP response will contain a `tls_version` value which contains the highest version of TLS that is supported by the client."}]}')}}]);