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
  const [monthlyInboundCalls, setMonthlyInboundCalls] = useState(40);
  const [avgCallDuration, setAvgCallDuration] = useState(3.0);
  const [missedCallRate, setMissedCallRate] = useState(25);
  const [closeRate, setCloseRate] = useState(50);
  const [revenuePerJob, setRevenuePerJob] = useState(200);
  const [receptionistCost, setReceptionistCost] = useState(4100);
  const [aiReceptionistCost, setAiReceptionistCost] = useState(1000);

  // Calculated results
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [recoveredCalls, setRecoveredCalls] = useState(0);
  const [recoveredRevenue, setRecoveredRevenue] = useState(0);
  const [totalROI, setTotalROI] = useState(0);
  const [roi12Month, setRoi12Month] = useState(0);

  // Recalculate when inputs change
  useEffect(() => {
    // Direct cost savings (monthly)
    const costSavings = receptionistCost - aiReceptionistCost;
    
    // Recovered calls and revenue
    const missedCalls = monthlyInboundCalls * (missedCallRate / 100);
    const recovered = missedCalls; // Assume AI answers all previously missed calls
    const newBookings = recovered * (closeRate / 100);
    const additionalRevenue = newBookings * revenuePerJob;
    
    // Monthly total benefit
    const monthlyBenefit = costSavings + additionalRevenue;
    
    // Annual savings
    const annualBenefit = monthlyBenefit * 12;
    
    // ROI calculation (annual benefit / annual cost of AI)
    const annualAICost = aiReceptionistCost * 12;
    const returnOnInvestment = (annualBenefit / annualAICost) * 100;
    
    setMonthlySavings(costSavings);
    setAnnualSavings(costSavings * 12);
    setRecoveredCalls(recovered);
    setRecoveredRevenue(additionalRevenue);
    setTotalROI(monthlyBenefit);
    setRoi12Month(returnOnInvestment);
  }, [monthlyInboundCalls, avgCallDuration, missedCallRate, closeRate, revenuePerJob, receptionistCost, aiReceptionistCost]);

  return (
    <section id="roi-calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your <span className="text-primary">ROI</span>
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
                    onChange={(e) => setMonthlyInboundCalls(Number(e.target.value))}
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
                    onChange={(e) => setAvgCallDuration(Number(e.target.value))}
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
                            % of inbound calls you don't answer today. Studies show SMBs miss 37%-62% of calls.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="missed-rate"
                    type="number"
                    value={missedCallRate}
                    onChange={(e) => setMissedCallRate(Number(e.target.value))}
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
                            Of answered calls, how many turn into a paying job or booked appointment? Average for local services is ~50%.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="close-rate"
                    type="number"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
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
                            Average revenue from one new customer / appointment
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="revenue-job"
                    type="number"
                    value={revenuePerJob}
                    onChange={(e) => setRevenuePerJob(Number(e.target.value))}
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
                    onChange={(e) => setReceptionistCost(Number(e.target.value))}
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
                            Your chosen AI plan
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id="ai-cost"
                    type="number"
                    value={aiReceptionistCost}
                    onChange={(e) => setAiReceptionistCost(Number(e.target.value))}
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