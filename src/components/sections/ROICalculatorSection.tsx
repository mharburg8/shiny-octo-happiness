import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { BarChart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ROICalculatorSection() {
  // Input defaults based on spec
  const [monthlyInboundCalls, setMonthlyInboundCalls] = useState(400);
  const [avgCallDuration, setAvgCallDuration] = useState(4);
  const [missedCallRate, setMissedCallRate] = useState(20);
  const [closeRate, setCloseRate] = useState(45);
  const [revenuePerJob, setRevenuePerJob] = useState(175);
  const [receptionistCost, setReceptionistCost] = useState(3800);
  const [aiReceptionistCost, setAiReceptionistCost] = useState(2950);

  // Calculated results
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [recoveredCalls, setRecoveredCalls] = useState(0);
  const [recoveredRevenue, setRecoveredRevenue] = useState(0);
  const [totalROI, setTotalROI] = useState(0);
  const [roi12Month, setRoi12Month] = useState(0);

  // Recalculate when inputs change
  useEffect(() => {
    // Calculate recovered calls and additional revenue
    const recovered = Math.round(monthlyInboundCalls * (missedCallRate / 100));
    const additionalRevenue = recovered * (closeRate / 100) * revenuePerJob;
    
    // Calculate direct monthly savings
    const directSavings = Math.max(receptionistCost - aiReceptionistCost, 0);
    
    // Calculate total monthly benefit
    const monthlyBenefit = directSavings + additionalRevenue;
    
    // Calculate annual savings and ROI
    const annualSavings = directSavings * 12;
    const annualAICost = Math.max(aiReceptionistCost * 12, 1);
    const returnOnInvestment = Math.round(((monthlyBenefit * 12) / annualAICost) * 100);
    
    setMonthlySavings(directSavings);
    setAnnualSavings(annualSavings);
    setRecoveredCalls(recovered);
    setRecoveredRevenue(additionalRevenue);
    setTotalROI(monthlyBenefit);
    setRoi12Month(returnOnInvestment);
  }, [monthlyInboundCalls, avgCallDuration, missedCallRate, closeRate, revenuePerJob, receptionistCost, aiReceptionistCost]);

  return (
    <section id="roi-calculator" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Potential <span className="text-primary">ROI</span> (Solo Provider — Conservative Defaults)
          </h2>
          <p className="text-gray-600 text-lg">
            See how much your business could save and earn with our AI Receptionist solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Inputs Card */}
          <Card className="shadow-lg border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-primary" />
                Your Business Information
              </h3>
              
              <div className="space-y-4">
                {/* Monthly Inbound Calls */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label htmlFor="monthly-calls" className="text-sm font-medium">
                      Monthly inbound calls
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-help text-xs text-gray-500">
                          ?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64 text-sm">
                            How many phone calls does your business receive per month?
                            (Default: 20 calls × 20 working days)
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="monthly-calls"
                    type="number"
                    value={monthlyInboundCalls}
                    onChange={(e) => setMonthlyInboundCalls(Math.max(0, Math.floor(Number(e.target.value))))}
                    className="w-full"
                  />
                </div>

                {/* Average Call Duration */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label htmlFor="call-duration" className="text-sm font-medium">
                      Avg. call duration (min)
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-help text-xs text-gray-500">
                          ?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64 text-sm">
                            Typical talk-time per call. Industry average is 2.6-3.3 minutes.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="call-duration"
                    type="number"
                    step="0.1"
                    value={avgCallDuration}
                    onChange={(e) => setAvgCallDuration(Math.max(0, Math.floor(Number(e.target.value))))}
                    className="w-full"
                  />
                </div>

                {/* Missed Call Rate */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label htmlFor="missed-rate" className="text-sm font-medium">
                      Missed-call rate (%)
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-help text-xs text-gray-500">
                          ?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64 text-sm">
                            Percent of inbound calls you currently miss. 15–35% is typical; 20% is conservative.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="missed-rate"
                    type="number"
                    value={missedCallRate}
                    onChange={(e) => setMissedCallRate(Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="w-full"
                  />
                </div>

                {/* Close/Booking Rate */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label htmlFor="close-rate" className="text-sm font-medium">
                      Close / booking rate (%)
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-help text-xs text-gray-500">
                          ?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64 text-sm">
                            Percent of answered calls that become booked appointments. We use 45% as a conservative default.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="close-rate"
                    type="number"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="w-full"
                  />
                </div>

                {/* Revenue per Job */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label htmlFor="revenue-job" className="text-sm font-medium">
                      Revenue per job ($)
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-help text-xs text-gray-500">
                          ?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64 text-sm">
                            Average revenue from a first visit or booked appointment. Conservative default: $175.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="revenue-job"
                    type="number"
                    value={revenuePerJob}
                    onChange={(e) => setRevenuePerJob(Math.max(0, Number(e.target.value)))}
                    className="w-full"
                  />
                </div>

                {/* Current Receptionist Cost */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label htmlFor="receptionist-cost" className="text-sm font-medium">
                      Current receptionist cost ($/month)
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-help text-xs text-gray-500">
                          ?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64 text-sm">
                            Fully-loaded monthly cost of a human receptionist (wages + benefits + taxes)
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="receptionist-cost"
                    type="number"
                    value={receptionistCost}
                    onChange={(e) => setReceptionistCost(Math.max(0, Number(e.target.value)))}
                    className="w-full"
                  />
                </div>

                {/* AI Receptionist Cost */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label htmlFor="ai-cost" className="text-sm font-medium">
                      AI receptionist plan cost ($/month)
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-help text-xs text-gray-500">
                          ?
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64 text-sm">
                            HIPAA-ready AI receptionist with BAA.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="ai-cost"
                    type="number"
                    value={aiReceptionistCost}
                    onChange={(e) => setAiReceptionistCost(Math.max(0, Number(e.target.value)))}
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="shadow-lg border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Your Potential ROI</h3>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Direct Cost Savings</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Monthly Savings</p>
                      <p className="text-2xl font-bold text-primary">${monthlySavings.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Annual Savings</p>
                      <p className="text-2xl font-bold text-primary">${annualSavings.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Revenue Impact</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Recovered Calls Monthly</p>
                      <p className="text-2xl font-bold text-green-600">{Math.round(recoveredCalls)}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Additional Monthly Revenue</p>
                      <p className="text-2xl font-bold text-green-600">${Math.round(recoveredRevenue).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Total Monthly Benefit</h4>
                  <p className="text-3xl font-bold text-primary">${Math.round(totalROI).toLocaleString()}/mo</p>
                  <p className="text-sm text-gray-500 mt-1">Combined savings and additional revenue</p>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">12-Month Return on Investment</h4>
                  <p className="text-3xl font-bold text-primary">{Math.round(roi12Month)}%</p>
                  <p className="text-sm text-gray-500 mt-1">For every $1 spent on AI receptionist</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}