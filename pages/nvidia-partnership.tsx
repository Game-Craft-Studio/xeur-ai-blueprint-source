import React from 'react';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import { Badge } from '../src/components/ui/badge';
import { CheckCircle, Clock, FileText, TrendingUp, Shield, Target, Zap, DollarSign } from 'lucide-react';

const NVIDIAPartnership = () => {
  return (
    <>
      <Head>
        <title>NVIDIA Partnership - Strategic Resource & Leverage Analysis | XEUR.AI</title>
        <meta
          name="description"
          content="Strategic analysis of XEUR.AI's NVIDIA Inception partnership - $500k+ in resources, active Capital Connect access, and competitive advantages."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold">XEUR.AI × NVIDIA Partnership</h1>
              </div>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Strategic Resource Visualization & Leverage Analysis
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Badge className="bg-green-500 text-white px-4 py-2 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Partnership Active
                </Badge>
                <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                  <DollarSign className="h-4 w-4 mr-2" />
                  $500k+ Total Value
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Current Status Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
              📊 Current Partnership Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    NVIDIA Inception
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Status:</strong> Active Member
                  </p>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Value:</strong> $500k+ Benefits
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Access:</strong> Full Ecosystem
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Capital Connect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Status:</strong> 3-Month Active Access
                  </p>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Timeline:</strong> May 16 - Aug 16, 2025
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Value:</strong> Direct VC Network
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    DGX Cloud Credits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Status:</strong> Application Submitted
                  </p>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Value:</strong> Up to $100k
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Purpose:</strong> LLM Training & Inference
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    Additional Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>AWS Credits:</strong> $100k Available
                  </p>
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Azure Credits:</strong> $150k Available
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>AI Tools:</strong> Multiple Discounts
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Resource Value Breakdown */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
              💰 Total Resource Value Breakdown
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Cloud Credits</span>
                      <span className="font-bold text-blue-600">$275k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">AI/ML Tools</span>
                      <span className="font-bold text-green-600">$50k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="font-medium">Capital Connect</span>
                      <span className="font-bold text-red-600">$200k+ potential</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="font-medium">NVIDIA Direct</span>
                      <span className="font-bold text-yellow-600">$75k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Hardware/Software</span>
                      <span className="font-bold text-purple-600">$50k</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strategic Value Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-6">
                    <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg">
                      <h3 className="text-2xl font-bold">$500k+</h3>
                      <p className="text-sm opacity-90">Total Direct Value</p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg">
                      <h3 className="text-2xl font-bold">Immeasurable</h3>
                      <p className="text-sm opacity-90">Strategic Value</p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg">
                      <h3 className="text-2xl font-bold">$10M+</h3>
                      <p className="text-sm opacity-90">Capital Access Potential</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Competitive Moat Enhancement */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
              🛡️ Competitive Moat Enhancement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Technology Moat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    NVIDIA-validated architecture + cutting-edge infrastructure access
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Brand Moat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Association with NVIDIA enhances credibility & enterprise appeal
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Capital Moat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Exclusive VC network access + reduced operational costs
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-600" />
                    Execution Moat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Accelerated development + preferred technical support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 3-Month Capital Connect Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
              📈 3-Month Capital Connect Timeline
            </h2>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Week 1-2: Preparation (Completed)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Optimize Inception profile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Prepare Series A materials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Set up investor CRM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    Week 3-8: Active Engagement (Current Phase)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-blue-500 rounded-full"></div>
                      <span>Respond to VC inquiries &lt;24hrs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-blue-500 rounded-full"></div>
                      <span>Target 15-20 initial contacts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-blue-500 rounded-full"></div>
                      <span>Schedule 5-8 serious meetings</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-orange-500" />
                    Week 9-12: Conversion (Upcoming)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-orange-500 rounded-full"></div>
                      <span>Generate 2-3 term sheets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-orange-500 rounded-full"></div>
                      <span>Create competitive dynamics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-orange-500 rounded-full"></div>
                      <span>Target Series A close Q4 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Implementation Roadmap */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
              🔄 Implementation Roadmap
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Phase 1: Immediate (0-30d)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="font-medium text-red-700">Capital Connect</div>
                      <div className="text-sm text-red-600">100% Priority</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-700">Technical Benefits</div>
                      <div className="text-sm text-blue-600">60% Utilization</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-700">Strategic Positioning</div>
                      <div className="text-sm text-green-600">40% Focus</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Phase 2: Integration (30-90d)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="font-medium text-red-700">Capital Connect</div>
                      <div className="text-sm text-red-600">80% Active</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-700">Technical Benefits</div>
                      <div className="text-sm text-blue-600">100% Utilization</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-700">Strategic Positioning</div>
                      <div className="text-sm text-green-600">80% Development</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Phase 3: Leverage (90d+)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="font-medium text-red-700">Capital Connect</div>
                      <div className="text-sm text-red-600">40% Conversion</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-700">Technical Benefits</div>
                      <div className="text-sm text-blue-600">80% Optimization</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-700">Strategic Positioning</div>
                      <div className="text-sm text-green-600">100% Leverage</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Takeaways */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl text-center">🎯 Strategic Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3">Current Strategic Value</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      $500k+ direct benefits active
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      3-month VC network access (Capital Connect)
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      DGX Cloud approval pending
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Next 30 Days Priority Actions</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-500" />
                      Maximize Capital Connect exposure
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-500" />
                      Apply for AWS/Azure credits
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-500" />
                      Develop co-branding materials
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default NVIDIAPartnership;