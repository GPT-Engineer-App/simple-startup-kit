import React from 'react';
import Layout from '../components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Index = () => {
  return (
    <Layout>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Welcome to My App</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a bare-bones application that you can modify and build upon. Start by editing src/pages/Index.jsx</p>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Index;