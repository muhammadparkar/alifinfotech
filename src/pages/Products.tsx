import { useState } from 'react'
import { Cpu, Box, Smartphone, Check, Search, RefreshCw, TrendingUp } from 'lucide-react'

interface ProductsProps {
  setCurrentPage: (page: string) => void;
}

export default function Products({ setCurrentPage }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<'ams' | 'wms' | 'mobile'>('ams')
  const [mobileScreen, setMobileScreen] = useState<'scan' | 'signature'>('scan')
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>('AST-9021')
  const [scanActive, setScanActive] = useState(false)

  const handleContactClick = () => {
    setCurrentPage('contact')
    window.location.hash = '#contact'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const amsFeatures = [
    { title: 'Dynamic Asset Tracking', desc: 'Real-time monitoring of server nodes, machinery, IT hardware, and company vehicles.' },
    { title: 'Depreciation Calculations', desc: 'Automatic valuation forecasting supporting IFRS and regional tax calculations.' },
    { title: 'Maintenance Alerts', desc: 'Schedules and dispatches alerts when devices require calibration, testing, or servicing.' },
    { title: 'Barcode/QR Integrations', desc: 'Assign and print scan stickers directly linked to active asset details.' }
  ]

  const wmsFeatures = [
    { title: 'FIFO/LIFO Operations', desc: 'Automated batch code ordering strategies based on shelf-life and dispatch priorities.' },
    { title: 'Automated Picking Routes', desc: 'Generates optimized staff walking paths within warehouses to accelerate picking.' },
    { title: 'Multi-Warehouse Link', desc: 'Sync inventory counts instantly between locations in Doha and Hyderabad.' },
    { title: 'Low Stock Safeguards', desc: 'Creates automated purchase order drafts when stocks hit critical limits.' }
  ]

  const mobileFeatures = [
    { title: 'Offline Database Support', desc: 'Field teams log audits and customer sales offline; syncs automatically once online.' },
    { title: 'Hardware Integration', desc: 'Camera barcode scanning, GPS geolocation tags, and Bluetooth thermal printer links.' },
    { title: 'Encrypted Security', desc: 'Biometric authorization combined with end-to-end tokenized data security.' },
    { title: 'Push Alerts Console', desc: 'Send direct tasks and operational priorities to workers on-site to execute.' }
  ]

  // Mock Data for AMS Dashboard
  const amsAssets = [
    { id: 'AST-9021', name: 'Doha Rack Node B1', type: 'Server Node', location: 'Doha HQ', status: 'Optimal' },
    { id: 'AST-8812', name: 'Hitech Node C4', type: 'Development Server', location: 'Hyderabad Lab', status: 'Maintenance' },
    { id: 'AST-7431', name: 'HQ Dev Node 18', type: 'Workstation Mac', location: 'Doha HQ', status: 'Optimal' }
  ]

  // Mock Data for WMS Bins
  const wmsBins = [
    { code: 'A1-01', status: 'Full', count: 120 },
    { code: 'A1-02', status: 'Empty', count: 0 },
    { code: 'A1-03', status: 'Picking', count: 45 },
    { code: 'B2-01', status: 'Full', count: 98 },
    { code: 'B2-02', status: 'Full', count: 150 },
    { code: 'B2-03', status: 'Empty', count: 0 }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background spotlights & overlays */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] right-[5%] w-[300px] h-[300px] bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Proprietary Products
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-offwhite">
            Enterprise Platforms & Applications
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            Engineered internally by our senior developers, these software products allow rapid deployment and seamless operational integration.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex justify-start border-b border-brand-offwhite/5 pb-1">
          <div className="flex gap-2">
            {[
              { id: 'ams', label: 'Alif AMS', icon: Cpu },
              { id: 'wms', label: 'Alif WMS', icon: Box },
              { id: 'mobile', label: 'Alif Mobile App', icon: Smartphone }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'ams' | 'wms' | 'mobile')}
                className={`flex items-center gap-2 px-6 py-3.5 text-xs font-semibold font-mono tracking-wider transition-all border-b-2 cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-brand-gold text-brand-gold'
                    : 'border-transparent text-brand-gray hover:text-brand-offwhite'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Product Panel */}
        <div className="p-8 md:p-12 rounded bg-brand-charcoal-light border border-brand-offwhite/5 glow-gold">
          {activeTab === 'ams' && (
            <div id="ams" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-gold/5 text-brand-gold border border-brand-gold/10 text-xs font-mono select-none">
                  <Cpu className="w-3.5 h-3.5" />
                  ALIF AMS - RELEASE v4.2
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-offwhite">Asset Management System</h2>
                <p className="text-brand-gray text-xs leading-relaxed">
                  Alif Asset Management System (AMS) enables companies to audit, track, schedule, and optimize physical and digital assets across multiple offices. Eliminate ghost assets and avoid regulatory license penalties.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {amsFeatures.map((f, idx) => (
                    <div key={idx} className="p-4 rounded bg-brand-charcoal border border-brand-offwhite/5 space-y-1">
                      <h4 className="text-xs font-bold text-brand-offwhite flex items-center gap-2 font-mono uppercase tracking-wide">
                        <Check className="w-3.5 h-3.5 text-brand-gold" />
                        {f.title}
                      </h4>
                      <p className="text-[11px] text-brand-gray leading-normal">{f.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-brand-offwhite/5 flex gap-4 flex-wrap">
                  <button
                    onClick={handleContactClick}
                    className="px-5 py-3 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs cursor-pointer transition-colors"
                  >
                    Request Demo Access
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="px-5 py-3 rounded border border-brand-offwhite/15 hover:border-brand-gold/30 text-brand-offwhite font-semibold text-xs bg-brand-charcoal-light/40 transition-all cursor-pointer"
                  >
                    View System Spec Sheet
                  </button>
                </div>
              </div>

              {/* HIGH FIDELITY AMS MOCKUP */}
              <div className="lg:col-span-6 p-6 rounded bg-brand-charcoal-dark border border-brand-offwhite/5 flex flex-col justify-between aspect-video relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/2 rounded-full blur-3xl pointer-events-none"></div>
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-brand-offwhite/5 pb-4 mb-4 font-mono text-[9px] text-brand-gray">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                    <span className="w-2 h-2 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                    <span className="w-2 h-2 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-brand-charcoal px-2.5 py-1 rounded border border-brand-offwhite/5 select-none">
                    <Search className="w-3 h-3 text-brand-gray/60" />
                    <span>Search queries...</span>
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="flex-grow space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[9px] font-mono text-brand-gray uppercase tracking-wider">Asset Registry</h5>
                    <span className="text-[8px] text-brand-gold bg-brand-gold/5 px-2 py-0.5 rounded border border-brand-gold/10 font-mono select-none">Sync: OK</span>
                  </div>

                  {/* Asset list */}
                  <div className="space-y-1.5 text-[10px] font-mono">
                    {amsAssets.map((asset) => (
                      <div
                        key={asset.id}
                        onClick={() => setSelectedAssetId(selectedAssetId === asset.id ? null : asset.id)}
                        className={`p-2.5 rounded border transition-all cursor-pointer flex items-center justify-between ${
                          selectedAssetId === asset.id
                            ? 'bg-brand-charcoal border-brand-gold/20 text-brand-gold shadow-sm'
                            : 'bg-transparent border-brand-offwhite/5 text-brand-offwhite/85 hover:bg-brand-charcoal/30'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-brand-gold">{asset.id}</span>
                          <span>{asset.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] text-brand-gray font-mono">{asset.location}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${asset.status === 'Optimal' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Asset Info Detail */}
                  {selectedAssetId && (
                    <div className="p-2.5 rounded bg-brand-charcoal border border-brand-offwhite/5 text-[9px] font-mono text-brand-offwhite animate-fadeIn">
                      <div className="flex justify-between">
                        <span>Model: Core Rack System 2U</span>
                        <span className="text-brand-gold">Depreciation: 12% / yr</span>
                      </div>
                      <div className="mt-1 text-[8px] text-brand-gray">Last maintenance verification: 14 days ago by Doha HQ Tech.</div>
                    </div>
                  )}
                </div>

                {/* SVG Mini Chart */}
                <div className="mt-4 pt-4 border-t border-brand-offwhite/5 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[9px] text-brand-gray font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Depreciation Index</span>
                  </div>
                  <svg className="w-24 h-6 text-brand-gold" viewBox="0 0 100 25" fill="none">
                    <path d="M0 25 L20 18 L40 22 L60 14 L80 16 L100 5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M0 25 L20 18 L40 22 L60 14 L80 16 L100 5 L100 25 Z" fill="url(#amsGrad)" opacity="0.05" />
                    <defs>
                      <linearGradient id="amsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00c8f8" />
                        <stop offset="100%" stopColor="#00c8f8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wms' && (
            <div id="wms" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-gold/5 text-brand-gold border border-brand-gold/10 text-xs font-mono select-none">
                  <Box className="w-3.5 h-3.5" />
                  ALIF WMS - RELEASE v3.8
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-offwhite">Warehouse Management</h2>
                <p className="text-brand-gray text-xs leading-relaxed">
                  Alif Warehouse Management System (WMS) delivers pixel-perfect inventory auditing, stock rotation, tracking by batch, expiration monitoring, and automated order fulfillment pipelines.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wmsFeatures.map((f, idx) => (
                    <div key={idx} className="p-4 rounded bg-brand-charcoal border border-brand-offwhite/5 space-y-1">
                      <h4 className="text-xs font-bold text-brand-offwhite flex items-center gap-2 font-mono uppercase tracking-wide">
                        <Check className="w-3.5 h-3.5 text-brand-gold" />
                        {f.title}
                      </h4>
                      <p className="text-[11px] text-brand-gray leading-normal">{f.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-brand-offwhite/5 flex gap-4 flex-wrap">
                  <button
                    onClick={handleContactClick}
                    className="px-5 py-3 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs cursor-pointer transition-colors"
                  >
                    Request Demo Access
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="px-5 py-3 rounded border border-brand-offwhite/15 hover:border-brand-gold/30 text-brand-offwhite font-semibold text-xs bg-brand-charcoal-light/40 transition-all cursor-pointer"
                  >
                    View System Spec Sheet
                  </button>
                </div>
              </div>

              {/* HIGH FIDELITY WMS MOCKUP */}
              <div className="lg:col-span-6 p-6 rounded bg-brand-charcoal-dark border border-brand-offwhite/5 flex flex-col justify-between aspect-video relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/2 rounded-full blur-3xl pointer-events-none"></div>

                {/* Header */}
                <div className="flex items-center justify-between border-b border-brand-offwhite/5 pb-4 mb-4 font-mono text-[9px] text-brand-gray">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                    <span className="w-2 h-2 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                    <span className="w-2 h-2 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                  </div>
                  <span className="text-[8px] tracking-widest uppercase font-mono">WMS INVENTORY MATRIX</span>
                </div>

                {/* Simulated bin cells map */}
                <div className="flex-grow space-y-4">
                  <div className="flex items-center justify-between text-[9px] font-mono text-brand-gray">
                    <span>Warehouse Bins Layout (Zone A)</span>
                    <span className="text-brand-gold">Total Bins: 24 active</span>
                  </div>

                  <div className="grid grid-cols-6 gap-2">
                    {wmsBins.map((bin, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded border text-center transition-all cursor-pointer flex flex-col justify-between ${
                          bin.status === 'Full'
                            ? 'bg-brand-charcoal border-brand-gold/20 text-brand-gold'
                            : bin.status === 'Picking'
                            ? 'bg-brand-charcoal-light border-brand-amber/20 text-brand-amber animate-pulse'
                            : 'bg-transparent border-brand-offwhite/5 text-brand-gray/50'
                        }`}
                      >
                        <span className="text-[7px] font-mono font-bold block">{bin.code}</span>
                        <span className="text-[10px] font-extrabold mt-1 font-mono">{bin.count}</span>
                      </div>
                    ))}
                  </div>

                  {/* Order Activity Logs */}
                  <div className="p-2.5 rounded bg-brand-charcoal border border-brand-offwhite/5 text-[9px] font-mono text-brand-gray space-y-1">
                    <div className="flex items-center justify-between text-brand-gray/50">
                      <span>Dispatch Activity Log</span>
                      <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                    </div>
                    <div className="flex justify-between text-brand-offwhite/90">
                      <span>PO-9021 (Doha) {"->"} Staged</span>
                      <span className="text-emerald-400">OK</span>
                    </div>
                    <div className="flex justify-between text-brand-offwhite/90">
                      <span>PO-8912 (Hyderabad) {"->"} Picking</span>
                      <span className="text-brand-amber">Active</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-offwhite/5 mt-4 flex items-center justify-between text-[8px] font-mono text-brand-gray/60">
                  <span>Logic ERP bridge: Online</span>
                  <span>Uptime: 100%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mobile' && (
            <div id="mobile" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-gold/5 text-brand-gold border border-brand-gold/10 text-xs font-mono select-none">
                  <Smartphone className="w-3.5 h-3.5" />
                  ALIF MOBILE SUITE
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-offwhite">Corporate Mobile Applications</h2>
                <p className="text-brand-gray text-xs leading-relaxed">
                  Provide your workforce on the go with custom cross-platform applications. Fully integrated with your enterprise resource software, enabling offline records logging, QR codes scanning and instant manager sign-offs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mobileFeatures.map((f, idx) => (
                    <div key={idx} className="p-4 rounded bg-brand-charcoal border border-brand-offwhite/5 space-y-1">
                      <h4 className="text-xs font-bold text-brand-offwhite flex items-center gap-2 font-mono uppercase tracking-wide">
                        <Check className="w-3.5 h-3.5 text-brand-gold" />
                        {f.title}
                      </h4>
                      <p className="text-[11px] text-brand-gray leading-normal">{f.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-brand-offwhite/5 flex gap-4 flex-wrap">
                  <button
                    onClick={handleContactClick}
                    className="px-5 py-3 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs cursor-pointer transition-colors"
                  >
                    Request Demo Access
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="px-5 py-3 rounded border border-brand-offwhite/15 hover:border-brand-gold/30 text-brand-offwhite font-semibold text-xs bg-brand-charcoal-light/40 transition-all cursor-pointer"
                  >
                    View System Spec Sheet
                  </button>
                </div>
              </div>

              {/* HIGH FIDELITY MOBILE APP SIMULATOR */}
              <div className="lg:col-span-6 flex justify-center py-4">
                {/* Phone Frame */}
                <div className="w-64 aspect-[9/19] rounded-[38px] border-4 border-brand-charcoal bg-brand-charcoal-dark p-3.5 flex flex-col justify-between shadow-2xl relative overflow-hidden border-brand-offwhite/10 glow-gold">
                  {/* Speaker Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-brand-charcoal-dark rounded-b-xl border-x border-b border-brand-offwhite/10 flex items-center justify-center">
                    <div className="w-10 h-1 bg-brand-charcoal rounded-full"></div>
                  </div>

                  {/* Phone Header */}
                  <div className="flex justify-between items-center text-[8px] text-brand-gray font-mono pt-1">
                    <span>9:41 AM</span>
                    <div className="flex items-center gap-1.5">
                      <span>LTE</span>
                      <div className="w-3.5 h-1.5 border border-brand-gray/40 rounded-sm p-[1px] flex items-center">
                        <div className="w-full h-full bg-brand-gray/40 rounded-2xs"></div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Display Screen */}
                  <div className="flex-grow my-4 rounded-2xl bg-brand-charcoal border border-brand-offwhite/5 p-3 flex flex-col justify-between relative overflow-hidden">
                    {mobileScreen === 'scan' ? (
                      <>
                        <div className="space-y-3 text-left">
                          <div className="flex items-center justify-between border-b border-brand-offwhite/5 pb-2 text-[8px] font-mono text-brand-offwhite">
                            <span>Alif Scan Core v1.4</span>
                            <span className="text-emerald-400 bg-emerald-950/40 px-1 rounded border border-emerald-500/10">Offline Ready</span>
                          </div>

                          {/* Scanner box area */}
                          <div className="relative aspect-square border border-brand-offwhite/5 rounded-xl bg-brand-charcoal-dark/50 flex flex-col items-center justify-center overflow-hidden group">
                            {scanActive && (
                              <div className="absolute left-0 right-0 h-0.5 bg-brand-gold animate-bounce"></div>
                            )}
                            <div className="w-24 h-24 border border-dashed border-brand-gold/20 rounded flex flex-col items-center justify-center">
                              <Cpu className={`w-8 h-8 text-brand-gold/30 ${scanActive ? 'animate-pulse' : ''}`} />
                            </div>
                            <span className="text-[7px] text-brand-gray font-mono mt-2 uppercase">Position QR in view</span>
                          </div>
                        </div>

                        {/* Scan Controls */}
                        <div className="space-y-2">
                          <button
                            onClick={() => {
                              setScanActive(!scanActive)
                              if (!scanActive) {
                                // Mock barcode discovery
                                setTimeout(() => {
                                  setMobileScreen('signature')
                                  setScanActive(false)
                                }, 1500)
                              }
                            }}
                            className="w-full py-2.5 rounded bg-brand-gold text-brand-charcoal-dark font-semibold text-[9px] text-center cursor-pointer hover:bg-brand-gold-light transition-colors"
                          >
                            {scanActive ? 'Cancel Scanning' : 'Trigger Scan Mode'}
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-3 text-left">
                          <div className="flex items-center justify-between border-b border-brand-offwhite/5 pb-2 text-[8px] font-mono text-brand-offwhite">
                            <span>Scan Verified</span>
                            <span className="text-brand-gold bg-brand-gold/5 px-1 rounded border border-brand-gold/10">AST-9021</span>
                          </div>

                          {/* Signature mock area */}
                          <div className="p-3 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-center space-y-2">
                            <span className="text-[7px] text-brand-gray block uppercase font-mono">Receiver Signature</span>
                            <div className="w-full h-16 bg-brand-charcoal/20 border border-dashed border-brand-offwhite/5 rounded flex items-center justify-center relative">
                              <svg className="w-32 h-10 text-brand-gold" viewBox="0 0 100 30" fill="none">
                                <path d="M10 20 Q 30 5, 45 25 T 80 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <button
                            onClick={() => setMobileScreen('scan')}
                            className="w-full py-2.5 rounded border border-brand-offwhite/5 text-brand-offwhite font-semibold text-[9px] text-center cursor-pointer hover:bg-brand-charcoal-dark transition-colors"
                          >
                            Clear and Reset Scan
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Home indicator bar */}
                  <div className="w-20 h-1 bg-brand-gray/40 rounded-full mx-auto -mt-1.5"></div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    )
  }
