use std::time::Instant;
use std::{sync::Mutex, time::Duration};

use reqwest::blocking::{Client, Response};

pub fn get_element_text(cell: &scraper::ElementRef) -> String {
    // The DOM allows multiple text nodes of an element, so join them all together.
    cell.text().collect::<Vec<_>>().join("").trim().to_string()
}

pub struct FetchClient {
    last_request: Option<Instant>,
    request_delay: std::time::Duration,
    client: Client,
}

impl FetchClient {
    pub fn new() -> reqwest::Result<FetchClient> {
        let client = Client::builder().build()?;
        Ok(FetchClient {
            last_request: None,
            request_delay: Duration::from_millis(50),
            client,
        })
    }
    // Do a request for the given URL, with a minimum time between requests to avoid overloading the server.
    pub fn fetch<T>(&mut self, url: T) -> reqwest::Result<Response>
    where
        T: reqwest::IntoUrl + std::fmt::Debug,
    {
        println!("fetch url: {url:?}");
        let now = Instant::now();
        if let Some(last_request) = self.last_request {
            let duration = now.duration_since(last_request);
            if duration < self.request_delay {
                let delay = self.request_delay - duration;
                println!("Wating a delay of {}ms", delay.as_millis());
                std::thread::sleep(delay);
            }
        }

        // let client = Client::new();
        let response = self.client.get(url).send()?;
        self.last_request = Some(now);
        Ok(response)
    }
}
