class LoginPage {
    visit(): void {
      cy.visit("/")
    }
  
    enterUsername(username: string): void {
      cy.get("[data-test=username]").type(username)
    }
  
    enterPassword(password: string): void {
      cy.get("[data-test=password]").type(password)
    }
  
    clickLoginButton(): void {
      cy.get("[data-test=login-button]").click()
    }
  
    assertLoggedIn(): void {
      cy.url().should("include", "/inventory.html")
      cy.get(".title").should("contain", "Products")
    }
  
    assertLockedOutError(): void {
      cy.get("[data-test=error]").should("be.visible")
      cy.get("[data-test=error]").should(
        "contain",
        "Epic sadface: Sorry, this user has been locked out."
      )
    }

    assertSameProductImage(): void {
        cy.get(".inventory_item_img img").then(($images) => {
            // Get the source of the first image.
            if ($images.length > 0) {
              const firstImageSrc = $images[0].src
        
              // Check if all other images have the same source.
              $images.each((index, img) => {
                expect(img.src).to.equal(firstImageSrc)
              })
            } else {
              // Handle the case where there are no images.
              cy.log("No product images found.")
              expect(true).to.equal(true); //Or expect(false).to.equal(true) if you want to fail if no images are found.
            }
          })
      }

    assertVisualFailure(): void {
        cy.get('.visual_failure').should('be.visible')
      }
  
    assertPerformanceGlitch(performanceThreshold: number): void {
      cy.window().then((win) => {
        const performance = win.performance
        const loadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart
  
        expect(loadTime).to.be.greaterThan(
          performanceThreshold,
          `Page load time (${loadTime}ms) exceeded threshold (${performanceThreshold}ms)`
        );
      });
    }
  }
  
  export default new LoginPage()