<main className="max-w-5xl mx-auto mt-10 px-4 flex flex-col gap-10">
  {/* Welcome Section */}
  <section className="text-center">
    <h1 className="text-4xl font-bold text-cyanMain mb-2">Welcome to CyanSync</h1>
    <p className="text-gray-600 text-lg">
      Automate your stitch/duet rights, contracts, and payouts — making TikTok monetization simple and professional.
    </p>
    <p className="mt-2 text-gray-500 italic">
      Next steps: select a detected derivative, review the rights, and request a contract.
    </p>
  </section>

  {/* Detected Derivatives */}
  <Card>
    <h2 className="text-cyanMain font-bold text-2xl mb-4">Detected Derivatives</h2>
    {derivatives.length > 0 ? (
      <ul className="space-y-3">
        {derivatives.map((url, i) => (
          <li
            key={i}
            className="flex flex-col md:flex-row md:justify-between items-start md:items-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline truncate"
            >
              {url}
            </a>
            <Button
              onClick={() =>
                (window.location.href = `/request?contentUrl=${encodeURIComponent(url)}`)
              }
              className="mt-2 md:mt-0"
            >
              Request Rights
            </Button>
          </li>
        ))}
      </ul>
    ) : (
      <div className="text-gray-500 text-sm italic text-center">No derivatives detected yet.</div>
    )}
  </Card>

  {/* Contracts */}
  <Card>
    <h2 className="text-navy font-bold text-xl mb-2">Contracts</h2>
    <div className="text-gray-600 text-center">
      Coming soon… Signed contracts will appear here automatically.
    </div>
  </Card>
</main>

{/* Footer */}
      <footer className="bg-gray-50 mt-16 border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} CyanSync. All rights reserved.
        </p>
        <p className="mt-1">
          Need help?{" "}
          <a
            href="mailto:georgec.ignite@gmail.com"
            className="text-cyanMain font-medium hover:underline"
          >
            Contact us
          </a>
        </p>
      </footer>
    </div>
  );
}
