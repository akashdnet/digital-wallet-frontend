import { Loader } from '@/components/loader'
import { TPost } from '@/redux/features/jsonplaceholder.api'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TProps {
  data: TPost[] | undefined
  isLoading: boolean
  isError: boolean
}

export default function Post({ data, isError, isLoading }: TProps) {
  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-40">
        <h1 className="text-xl font-semibold text-red-500">Something went wrong</h1>
      </div>
    )
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">📝 Posts</h1>
      <div className="grid gap-6 md:grid-cols-4">
        {data?.map(post => (
          <Card
            key={post.id}
            className="transition-shadow hover:shadow-lg border border-gray-200 rounded-lg overflow-hidden  m-5"
          >
            <CardHeader className="bg-gray-50 px-6 py-4">
              <CardTitle className="text-lg font-semibold text-gray-900">{post.title.split(' ').slice(0, 5).join(' ') + '...'}</CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Post ID: {post.id} • Slug: {post.slug}
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 py-4 space-y-4">
              {post.image && (
                <img
                  src={post.image}
                  alt={`${post.title} thumbnail`}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <p className="text-gray-700">{post.content.split(' ').slice(0, 20).join(' ') + '...'}</p>


              <div className="grid text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">Category:</span> {post.category}</p>
                <p><span className="font-medium">Status:</span> {post.status}</p>
                <p><span className="font-medium">Published:</span> {new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
